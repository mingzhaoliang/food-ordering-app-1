"use server";

import { revalidatePath } from "next/cache";
import { updateUser } from "./crud/users";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { addItemToCart, getCart, removeItemFromCart } from "./crud/cart";

export const updateProfile = async (prevState: { message: string; } | undefined, formData: FormData) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return { message: "Unauthorized!" };
    }

    const updatedUser = {
        id: session.user.id,
        username: formData.get("username"),
        phoneNumber: formData.get("phoneNumber"),
        street: formData.get("street"),
        city: formData.get("city"),
        state: formData.get("state"),
        postcode: formData.get("postcode"),
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

    switch (type) {
        case "get":
            return getCart(session.user.id);
        case "add":
            return addItemToCart(session.user.id, itemId!);
        case "remove":
            return removeItemFromCart(session.user.id, itemId!);
        default:
            return { message: "Invalid request" };
    }
}