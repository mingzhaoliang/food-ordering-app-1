import Link from "next/link";
import authBackground from "@/assets/images/auth-background.jpg";
import restaurantEnvironment from "@/assets/images/restaurant-environment.jpg";
import hero0 from "@/assets/images/hero-0.jpg";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero4 from "@/assets/images/hero-4.jpg";

import signin from "@/assets/icons/signin.svg";
import googleG from "@/assets/icons/google-g.svg";

import pizza from "@/assets/images/pizza.png";

export const restaurantName = "Cucina Felice";

export const logos: any = {
    default: {
        src: signin,
        alt: "Sign In Logo"
    },
    google: {
        src: googleG,
        alt: "Google Logo"
    }
};

export const images = {
    pizza: {
        src: pizza,
        alt: "Pizza Emoji",
    },
    authBackground: {
        src: authBackground,
        alt: "Vegetable Salad in Bowls",
        ref: <>Photo by <Link href="https://www.pexels.com/photo/photo-of-vegetable-salad-in-bowls-1640770">Ella Olsson</Link></>
    },
    restaurantEnvironment: {
        src: restaurantEnvironment,
        alt: "Round white ceramic plate and bowl",
        ref: <>Photo by <Link href="https://unsplash.com/@heftiba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Toa Heftiba</Link> on <Link href="https://unsplash.com/photos/round-white-ceramic-plate-and-bowl-loS68zG8P38?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    hero0: {
        src: hero0,
        alt: "Pizza on brown wooden table",
        ref: <>Photo by <Link href="https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nik Owens</Link> on <Link href="https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    hero1: {
        src: hero1,
        alt: "Cooked pizza inside oven",
        ref: <>Photo by <Link href="https://unsplash.com/@empowers_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emily Powers</Link> on <Link href="https://unsplash.com/photos/cooked-pizza-inside-oven-9xWl_zhIcS4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    hero2: {
        src: hero2,
        alt: "Truffle Mushroom Pasta",
        ref: <>Photo by <Link href="https://www.pexels.com/photo/plate-of-pasta-2773940">Pixelme Stock Photography</Link></>
    },
    hero3: {
        src: hero3,
        alt: "Roasted Meat and Dish with Tomato Sauce on the Table",
        ref: <>Photo by <Link href="https://www.pexels.com/photo/roasted-meat-and-dish-with-tomato-sauce-on-the-table-19130208">Jonathan Hidalgo</Link></>
    },
    hero4: {
        src: hero4,
        alt: "Pasta with red sauce on white ceramic round plate",
        ref: <>Photo by <Link href="https://unsplash.com/@dacakockica?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Danijela Prijovic</Link> on <Link href="https://unsplash.com/photos/pasta-with-red-sauce-on-white-ceramic-round-plate-qits91IZv1o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
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