"use server";

import { revalidatePath } from "next/cache";
import { updateUser } from "./crud/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { addItemToCart, clearCart, getCartItems, removeItemFromCart } from "./crud/cart";
import { getMenuItemById, getMenuItemByPublicId } from "./crud/menu";
import { DeliveryDetails, ReservationDetails } from "./crud/model-type";
import { headers } from "next/headers";
import { createReservation, getReservedTimes } from "./crud/reservations";
import { availableReservationTimes, availableTableNumber, restaurantName, restaurantNumber } from "@/utils/data";
import { dateFormatter } from "@/utils/formatter";
import { smtpTransport } from "@/utils/smtp-transport";

export const getHeroImages = async (publicIds: string[]) => {
    const heroImages = await Promise.all(publicIds.map(async (publicId) => {
        const menuItem = await getMenuItemByPublicId(publicId);

        return ({
            publicId: menuItem!.public_id,
            course: menuItem!.course,
            name: menuItem!.name,
            reference: menuItem!.reference,
        });
    }));

    return heroImages;
}

export const updateProfile = async (prevState: { message: string, status: string } | undefined, formData: FormData) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return { message: "Unauthorized!", status: "error" };
    }

    const updatedUser = {
        _id: session.user.id,
        username: formData.get("username") as string,
        phoneNumber: formData.get("phoneNumber") as string,
        street: formData.get("street") as string,
        city: formData.get("city") as string,
        state: formData.get("state") as string,
        postcode: formData.get("postcode") as string,
    }

    if (!updatedUser.username || updatedUser.username.length < 3) {
        return { message: "Username must be at least 3 characters long.", status: "error" }
    }

    if (updatedUser.phoneNumber && !String(updatedUser.phoneNumber).match(/^[0]\d{9,9}$/)) {
        return { message: "Invalid phone number. Must start with 0 and be 10 digits long.", status: "error" }
    }

    if (updatedUser.state && !["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT"].includes(updatedUser.state)) {
        return { message: "Invalid state.", status: "error" }
    }

    if (updatedUser.postcode && !String(updatedUser.postcode).match(/\d{4,4}/)) {
        return { message: "Invalid postcode. Must be 4 digits long.", status: "error" }
    }

    await updateUser(updatedUser);
    revalidatePath("/", "layout");

    if (!updatedUser.phoneNumber || !updatedUser.street || !updatedUser.city || !updatedUser.state || !updatedUser.postcode) {
        return { message: "Profile updated successfully, but a complete profile is required for ordering online.", status: "success" }
    }
    return { message: "Profile updated successfully!", status: "success" };
}

export const accessCart = async (type: string, itemId?: string) => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return { message: "Unauthorized!" };
    }

    let existingMenuItem;

    if (itemId) {
        if (!itemId.match(/^[0-9a-fA-F]{24}$/)) {
            return { message: "Invalid item id" };
        } else {
            existingMenuItem = await getMenuItemById(itemId);
            if (!existingMenuItem) {
                return { message: "Item not found" };
            }
        }
    }

    switch (type) {
        case "get":
            return getCartItems(session.user.id);
        case "add":
            return addItemToCart(session.user.id, existingMenuItem!);
        case "remove":
            return removeItemFromCart(session.user.id, itemId!);
        case "clear":
            return clearCart(session.user.id);
        default:
            return { message: "Invalid request" };
    }
}

const checkout = async (data: { deliveryDetails: DeliveryDetails, callbackUrl: string, orderId?: string }) => {
    const headersList = headers();
    const cookie = headersList.get("cookie");

    const isInvalidDeliveryDetails = Object.values(data.deliveryDetails).some(value => !value);
    if (isInvalidDeliveryDetails) {
        return { message: "Please provide valid delivery details.", url: "" };
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order/checkout/create-checkout-session`, {
            headers: {
                "Content-Type": "application/json",
                "Cookie": cookie || "",
            },
            body: JSON.stringify({
                deliveryDetails: data.deliveryDetails,
                callbackUrl: data.callbackUrl,
                orderId: data.orderId,
            }),
            method: "POST",
        })

        if (!response.ok) {
            const { message } = await response.json();
            throw new Error(message || "Failed to continue to payment.");
        }

        const { url } = await response.json();

        return { message: "success", url: url as string };

    } catch (error: any) {
        console.error(error);

        return { message: error.message, url: "" };
    }
}

export const cartCheckout = async (callbackUrl: string, prevState: { message: string; url: string } | undefined, formData: FormData) => {
    const data = Object.fromEntries(formData.entries());

    const response = await checkout({
        deliveryDetails: {
            username: data.username as string,
            phoneNumber: data.phoneNumber as string,
            street: data.street as string,
            city: data.city as string,
            state: data.state as string,
            postcode: data.postcode as string,
        },
        callbackUrl: callbackUrl as string
    });

    return response;
};

export const placedOrderCheckout = async (orderId: string, callbackUrl: string, prevState: { message: string; url: string } | undefined, formData: FormData) => {
    const data = Object.fromEntries(formData.entries());

    const response = await checkout({
        deliveryDetails: {
            username: data.username as string,
            phoneNumber: data.phoneNumber as string,
            street: data.street as string,
            city: data.city as string,
            state: data.state as string,
            postcode: data.postcode as string,
        },
        callbackUrl: callbackUrl as string,
        orderId: orderId as string,
    });

    return response;
}

export const refreshPage = (path: string, type: "layout" | "page" | undefined) => {
    revalidatePath(path, type);
}

const sendConfirmationEmail = async (reservationDetails: ReservationDetails) => {
    const emailSubject = `Reservation Confirmation at ${restaurantName}`;
    const emailHtml = `
    <p>Dear ${reservationDetails.name},</p>
    <p>We are delighted to confirm your reservation at ${restaurantName} for <u>${dateFormatter(reservationDetails.selectedDate)}</u> at <u>${reservationDetails.selectedTime}</u>.</p>
    <p><strong>Reservation Details:</strong></p>
    <ul>
        <li><strong>Date:</strong> ${dateFormatter(reservationDetails.selectedDate)}</li>
        <li><strong>Time:</strong> ${reservationDetails.selectedTime}</li>
        <li><strong>Mobile Number:</strong> ${reservationDetails.mobileNumber}</li>
        <li><strong>Number of Guests:</strong> ${reservationDetails.guests}</li>
        <li><strong>Special Requests:</strong> ${reservationDetails.specialRequests || "None"}</li>
    </ul>
    <p>Your reservation has been made under the name of ${reservationDetails.name}.</p>
    <p>Please note the following:</p>
    <ul>
        <li>Your table will be reserved for a duration of 2 hours, starting from the reservation time.</li>
        <li>If you require more time or have any special requests, please contact us directly at ${restaurantNumber}.</li>
        <li>We kindly request that you arrive on time for your reservation. If you anticipate being late, please inform us as soon as possible.</li>
    </ul>
    <p>We look forward to welcoming you!</p>
    <p>Warm regards,<br>${restaurantName} Team</p>
    `

    const result = await smtpTransport(
        { emailSubject, emailHtml },
        { status: "success", message: "A table has been reserved for you! Please check your email." },
        { status: "error", message: "Failed to send email." }
    )

    return result;
}

export const addReservation = async (reservationDetails: ReservationDetails, prevState: { status: string; message: string } | undefined, formData: FormData) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return { status: "error", message: "Unauthorized!" };
    }

    if (!reservationDetails.name || (reservationDetails.name as string).length < 3) {
        return { status: "error", message: "Username must be at least 3 characters long." }
    }

    if (!reservationDetails.email || !String(reservationDetails.email).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return { status: "error", message: "Invalid email address." }
    }

    if (!reservationDetails.mobileNumber || (!String(reservationDetails.mobileNumber).match(/^[0]\d{9,9}$/))) {
        return { status: "error", message: "Invalid phone number. Must start with 0 and be 10 digits long." }
    }

    if (reservationDetails.specialRequests && (reservationDetails.specialRequests as string).length > 2000) {
        return { status: "error", message: "Requests must be less than 2000 characters." }
    }

    await createReservation({
        ...reservationDetails,
        userId: session.user.id,
    })

    const newState = await sendConfirmationEmail(reservationDetails);

    return newState;
}

export const getAvailableTimes = async (selectedDate: Date) => {
    const defaultAvailableTimes = availableReservationTimes[selectedDate.getDay()];
    const reservedTimes = await getReservedTimes(selectedDate);

    const availableTimes: { [key: string]: { [key: string]: number } } = {
        "smallTable": {},
        "largeTable": {},
    }

    Object.keys(reservedTimes).forEach(tableType => {
        const reservedTimesForTable = reservedTimes[tableType as "smallTable" | "largeTable"];

        Object.keys(defaultAvailableTimes).forEach(timeKey => {
            const timeString = defaultAvailableTimes[Number(timeKey)];
            const previouseTimeString = defaultAvailableTimes[Number(timeKey) - 1];
            const laterTimeString = defaultAvailableTimes[Number(timeKey) + 1];

            if (!availableTimes[tableType as "smallTable" | "largeTable"][timeString]) {
                availableTimes[tableType as "smallTable" | "largeTable"][timeString] = 0;
            }

            let reservedNumber = 0;

            if (reservedTimesForTable[timeString]) {
                reservedNumber += reservedTimesForTable[timeString];
            }

            if (previouseTimeString && reservedTimesForTable[previouseTimeString]) {
                reservedNumber += reservedTimesForTable[previouseTimeString];
            }

            if (laterTimeString && reservedTimesForTable[laterTimeString]) {
                reservedNumber += reservedTimesForTable[laterTimeString];
            }

            availableTimes[tableType as "smallTable" | "largeTable"][timeString] = Math.max(0, availableTableNumber[tableType as "smallTable" | "largeTable"] - reservedNumber);
        })
    })

    const result: {
        [key: number]: { [key: string]: number },
    } = {
        1: { ...availableTimes.smallTable },
        2: { ...availableTimes.smallTable },
        3: { ...availableTimes.largeTable },
        4: { ...availableTimes.largeTable },
    }

    return result;
}