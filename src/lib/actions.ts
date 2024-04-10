"use server";

import { revalidatePath } from "next/cache";
import { updateUser } from "./crud/user";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { addItemToCart, getCartItems, removeItemFromCart } from "./crud/cart";
import { getMenuItemById } from "./crud/menu";

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
        default:
            return { message: "Invalid request" };
    }
}