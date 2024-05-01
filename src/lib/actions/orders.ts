"use server";

import { DeliveryDetails } from "@/types/users";
import { headers } from "next/headers";

const checkout = async (data: {
	deliveryDetails: DeliveryDetails;
	callbackUrl: string;
	orderId?: string;
}) => {
	const headersList = headers();
	const cookie = headersList.get("cookie");

	const isInvalidDeliveryDetails = Object.values(data.deliveryDetails).some((value) => {
		console.log(data.deliveryDetails);
		console.log("value", !!!value, value);
		return !value;
	});
	if (isInvalidDeliveryDetails) {
		return { message: "Please provide valid delivery details.", url: "" };
	}

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_BASE_URL}/api/order/checkout/create-checkout-session`,
			{
				headers: {
					"Content-Type": "application/json",
					Cookie: cookie || "",
				},
				body: JSON.stringify({
					deliveryDetails: data.deliveryDetails,
					callbackUrl: data.callbackUrl,
					orderId: data.orderId,
				}),
				method: "POST",
			}
		);

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
};

export const cartCheckout = async (
	callbackUrl: string,
	prevState: { message: string; url: string } | undefined,
	formData: FormData
) => {
	const data = Object.fromEntries(formData.entries());

	const response = await checkout({
		deliveryDetails: {
			username: data.username as string,
			mobileNumber: data.mobileNumber as string,
			street: data.street as string,
			city: data.city as string,
			state: data.state as string,
			postcode: data.postcode as string,
		},
		callbackUrl: callbackUrl as string,
	});

	return response;
};

export const placedOrderCheckout = async (
	orderId: string,
	callbackUrl: string,
	prevState: { message: string; url: string } | undefined,
	formData: FormData
) => {
	const data = Object.fromEntries(formData.entries());

	const response = await checkout({
		deliveryDetails: {
			username: data.username as string,
			mobileNumber: data.mobileNumber as string,
			street: data.street as string,
			city: data.city as string,
			state: data.state as string,
			postcode: data.postcode as string,
		},
		callbackUrl: callbackUrl as string,
		orderId: orderId as string,
	});

	return response;
};
