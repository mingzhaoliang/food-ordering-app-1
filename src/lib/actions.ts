"use server";

import { revalidatePath } from "next/cache";
import { updateUser } from "./users";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export const updateProfile = async (prevState:{message: string;} | undefined, formData:FormData) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return {message: "Unauthorized!"};
    }

    const updatedUser = {
        id: session.user.id,
        phoneNumber: formData.get("phoneNumber"),
        addressLine1: formData.get("addressLine1"),
        addressLine2: formData.get("addressLine2"),
        city: formData.get("city"),
        state: formData.get("state"),
        postcode: formData.get("postcode"),
    }

    if (updatedUser.phoneNumber && !String(updatedUser.phoneNumber).match(/^[0]\d{9,9}$/)) {
        return {message: "Invalid phone number. Must start with 0 and be 10 digits long."}
    }

    if (updatedUser.postcode && !String(updatedUser.postcode).match(/\d{4,4}/)) {
        return {message: "Invalid postcode. Must be 4 digits long."}
    }

    await updateUser(updatedUser);
    revalidatePath("/account/profile");
    return {message: "success"};
}