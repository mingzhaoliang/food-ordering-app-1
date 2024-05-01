"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { updateUser } from "../crud/user";
import { revalidatePath } from "next/cache";

export const updateProfile = async (
	prevState: { message: string; status: string } | undefined,
	formData: FormData
) => {
	const session = await getServerSession(authOptions);
	if (!session) {
		return { message: "Unauthorized!", status: "error" };
	}

	const updatedUser = {
		_id: session.user.id,
		username: formData.get("username") as string,
		mobileNumber: formData.get("mobileNumber") as string,
		street: formData.get("street") as string,
		city: formData.get("city") as string,
		state: formData.get("state") as string,
		postcode: formData.get("postcode") as string,
	};

	if (!updatedUser.username || updatedUser.username.length < 3) {
		return { message: "Username must be at least 3 characters long.", status: "error" };
	}

	if (updatedUser.mobileNumber && !String(updatedUser.mobileNumber).match(/^[0]\d{9,9}$/)) {
		return {
			message: "Invalid phone number. Must start with 0 and be 10 digits long.",
			status: "error",
		};
	}

	if (
		updatedUser.state &&
		!["NSW", "VIC", "QLD", "SA", "WA", "TAS", "NT"].includes(updatedUser.state)
	) {
		return { message: "Invalid state.", status: "error" };
	}

	if (updatedUser.postcode && !String(updatedUser.postcode).match(/\d{4,4}/)) {
		return { message: "Invalid postcode. Must be 4 digits long.", status: "error" };
	}

	await updateUser(updatedUser);
	revalidatePath("/", "layout");

	if (
		!updatedUser.mobileNumber ||
		!updatedUser.street ||
		!updatedUser.city ||
		!updatedUser.state ||
		!updatedUser.postcode
	) {
		return {
			message:
				"Profile updated successfully, but a complete profile is required for ordering online.",
			status: "success",
		};
	}
	return { message: "Profile updated successfully!", status: "success" };
};
