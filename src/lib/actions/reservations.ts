"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { createReservation } from "../crud/reservations";
import { getAvailableTimes } from "../crud/read/reservations";
import { restaurantName, restaurantNumber } from "@/utils/data";
import { dateFormatter } from "@/utils/formatter";
import { smtpTransport } from "@/utils/smtp-transport";
import { ReservationDetails } from "@/types/reservations";

const sendConfirmationEmail = async (reservationDetails: ReservationDetails) => {
	const emailSubject = `Reservation Confirmation at ${restaurantName}`;
	const emailHtml = `
    <p>Dear ${reservationDetails.name},</p>
    <p>We are delighted to confirm your reservation at ${restaurantName} for <u>${dateFormatter(reservationDetails.selectedDate)}</u> at <u>${reservationDetails.selectedTime}</u>.</p>
    <p><strong>Reservation Details:</strong></p>
    <ul>
        <li><strong>Date:</strong> ${dateFormatter(reservationDetails.selectedDate)}</li>
        <li><strong>Time:</strong> ${reservationDetails.selectedTime}</li>
        <li><strong>Number of Guests:</strong> ${reservationDetails.guests}</li>
        <li><strong>Mobile Number:</strong> ${reservationDetails.mobileNumber}</li>
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
    `;

	const result = await smtpTransport(
		{ emailSubject, emailHtml },
		{
			status: "success",
			message: "A table has been reserved for you! Please check your email.",
		},
		{ status: "error", message: "Failed to send email." }
	);

	return result;
};

export const addReservation = async (
	reservationDetails: ReservationDetails,
	prevState: { status: string; message: string } | undefined,
	formData: FormData
) => {
	const session = await getServerSession(authOptions);
	if (!session) {
		return { status: "error", message: "Unauthorized!" };
	}

	if (!reservationDetails.name || (reservationDetails.name as string).length < 3) {
		return { status: "error", message: "Username must be at least 3 characters long." };
	}

	if (
		!reservationDetails.email ||
		!String(reservationDetails.email).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	) {
		return { status: "error", message: "Invalid email address." };
	}

	if (
		!reservationDetails.mobileNumber ||
		!String(reservationDetails.mobileNumber).match(/^[0]\d{9,9}$/)
	) {
		return {
			status: "error",
			message: "Invalid phone number. Must start with 0 and be 10 digits long.",
		};
	}

	if (
		reservationDetails.specialRequests &&
		(reservationDetails.specialRequests as string).length > 2000
	) {
		return { status: "error", message: "Requests must be less than 2000 characters." };
	}

	if (reservationDetails.selectedTime === "No Time Selected") {
		return { status: "error", message: "Please select a time." };
	}

	// Check if the selected time is available
	const availableTimes = await getAvailableTimes(reservationDetails.selectedDate);
	if (!availableTimes[reservationDetails.guests][reservationDetails.selectedTime]) {
		return {
			status: "error",
			message: `The selected time for ${reservationDetails.guests} guests is not available. Please select another time.`,
		};
	}

	// Create reservation
	await createReservation({
		...reservationDetails,
		userId: session.user.id,
		status: "confirmed",
	});

	const newState = await sendConfirmationEmail(reservationDetails);

	return newState;
	// return { status: "success", message: "A table has been reserved for you! Please check your email." }
};
