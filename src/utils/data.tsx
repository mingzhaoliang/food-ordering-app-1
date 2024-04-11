import Link from "next/link";
import authBackground from "@/assets/images/auth-background.jpg";
import restaurantEnvironment from "@/assets/images/restaurant-environment.jpg";
import background0 from "@/assets/images/background-0.jpg";

export const defaultDeliveryFee = 10;
export const freeDeliveryThreshold = 50;
export const orderExpirationTime = 60 * 60; // 1 hour
export const overdueTime = 60 * 30; // 30 minutes

export const restaurantName = "Cucina Felice";

export const logos: any = {
    default: {
        src: "/icons/box-arrow-in-right.svg",
        alt: "Sign In Logo"
    },
    google: {
        src: "/icons/google-g.svg",
        alt: "Google Logo"
    }
};

export const images = {
    authBackground: {
        src: authBackground,
        alt: "Vegetable Salad in Bowls",
        ref: <>Photo by <Link href="https://www.pexels.com/photo/photo-of-vegetable-salad-in-bowls-1640770">Ella Olsson</Link></>
    },
    background0: {
        src: background0,
        alt: "Flat lay shot of a delicious apricot cake with a sour cream frosting on a dark marble floor.",
        ref: <>Photo by <Link href="https://unsplash.com/@nordwood?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">NordWood Themes</Link> on <Link href="https://unsplash.com/photos/a-slice-of-pizza-on-a-plate-next-to-a-bowl-of-nuts-mue4Jwr-N5M?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    restaurantEnvironment: {
        src: restaurantEnvironment,
        alt: "Round white ceramic plate and bowl",
        ref: <>Photo by <Link href="https://unsplash.com/@heftiba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Toa Heftiba</Link> on <Link href="https://unsplash.com/photos/round-white-ceramic-plate-and-bowl-loS68zG8P38?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
};

export const briefAbout = {
    story: {
        title: "Embark on a Delightful Culinary Journey",
        description: "At Cucina Felice, we invite you to embark on a delightful journey through the vibrant flavours of Italy. Our story is one of passion, tradition, and a deep-rooted love for authentic Italian cuisine. From our humble beginnings to becoming a cherished part of the Melbourne community, we've remained dedicated to bringing joy to our guests' dining experiences."
    },
    services: {
        title: "Experience Italian Hospitality, Anywhere You Are!",
        description: <>Whether you're planning a special evening out or craving Italian comfort at home, Cucina Felice offers both <span className="font-bold">reservations</span> and <span className="font-bold">online delivery</span> services. Our commitment to exceptional service extends beyond our restaurant doors, ensuring that you can enjoy the taste of Italy wherever you are.</>
    }
};