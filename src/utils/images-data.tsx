import Link from "next/link";

import hero0 from "@/assets/images/hero-0.jpg";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero4 from "@/assets/images/hero-4.jpg";


export const heroImages = {
    hero0: {
        src: hero0,
        alt: "Pizza on brown wooden table",
        reference: <>Photo by <Link href="https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nik Owens</Link> on <Link href="https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    hero1: {
        src: hero1,
        alt: "Italian sausage tortelloni alfredo mushrooms",
        reference: <>Photo on <Link href="https://olivieri.ca/recipes/italian-sausage-tortelloni-alfredo-mushrooms">Olivieri</Link></>
    },
    hero2: {
        src: hero2,
        alt: "Truffle Mushroom Pasta",
        reference: <>Photo by <Link href="https://www.pexels.com/photo/plate-of-pasta-2773940">Pixelme Stock Photography</Link></>
    },
    hero3: {
        src: hero3,
        alt: "Skillet gnocchi carbonara",
        reference: <>Photo on <Link href="https://olivieri.ca/recipes/skillet-gnocchi-carbonara">Olivieri</Link></>
    },
    hero4: {
        src: hero4,
        alt: "Beef ravioli with parmesan",
        reference: <>Photo on <Link href="https://www.perfectitaliano.com.au/en/recipes/beef-ravioli-with-parmesan.html">Perfect Italiano</Link></>
    },
};