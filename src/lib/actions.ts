"use server";

import { revalidatePath } from "next/cache";
import { updateUser } from "./crud/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { addItemToCart, clearCart, getCartItems, removeItemFromCart } from "./crud/cart";
import { getMenuItemById, getMenuItemByPublicId } from "./crud/menu";
import { DeliveryDetails } from "./crud/model-type";

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

export const updateProfile = async (prevState: { message: string } | undefined, formData: FormData) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return { message: "Unauthorized!" };
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

    if (updatedUser.phoneNumber && !String(updatedUser.phoneNumber).match(/^[0]\d{9,9}$/)) {
        return { message: "Invalid phone number. Must start with 0 and be 10 digits long." }
    }

    if (updatedUser.postcode && !String(updatedUser.postcode).match(/\d{4,4}/)) {
        return { message: "Invalid postcode. Must be 4 digits long." }
    }

    await updateUser(updatedUser);
    revalidatePath("/", "layout");
    return { message: "success" };
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
    const session = await getServerSession(authOptions);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order/checkout/create-checkout-session`, {
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId: session!.user.id,
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