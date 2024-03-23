import hero0 from "@/assets/hero-0.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import ImageCarousel from "@/components/images/image-carousel";
import Link from "next/link";

const images = [
    {
        image: hero0,
        alt: "Pizza on brown wooden table",
        ref: <>Photo by <Link href="https://unsplash.com/@nik_owens?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nik Owens</Link> on <Link href="https://unsplash.com/photos/pizza-on-brown-wooden-table-40OJLYVWeeM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    {
        image: hero1,
        alt: "Cooked pizza inside oven",
        ref: <>Photo by <Link href="https://unsplash.com/@empowers_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Emily Powers</Link> on <Link href="https://unsplash.com/photos/cooked-pizza-inside-oven-9xWl_zhIcS4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
    {
        image: hero2,
        alt: "Truffle Mushroom Pasta",
        ref: <>Photo by <Link href="https://www.pexels.com/photo/plate-of-pasta-2773940">Pixelme Stock Photography</Link></>
    },
    {
        image: hero3,
        alt: "Roasted Meat and Dish with Tomato Sauce on the Table",
        ref: <>Photo by <Link href="https://www.pexels.com/photo/roasted-meat-and-dish-with-tomato-sauce-on-the-table-19130208">Jonathan Hidalgo</Link></>
    },
    {
        image: hero4,
        alt: "Pasta with red sauce on white ceramic round plate",
        ref: <>Photo by <Link href="https://unsplash.com/@dacakockica?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Danijela Prijovic</Link> on <Link href="https://unsplash.com/photos/pasta-with-red-sauce-on-white-ceramic-round-plate-qits91IZv1o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</Link></>
    },
];

export default function Home() {

    return (
        <main>
            <div className="relative h-screen max-h-[40rem] overflow-hidden z-0 transition-all ease-linear flex flex-col justify-center items-center">
                {/* <div className="relative w-5/12 text-lg tracking-wide leading-relaxed abg-white/60 p-6 text-pretty text-justify">
					<p>
						Benvenuti! Discover the Authentic Flavours of Italy at Cucina
						Felice. From classic pasta dishes to wood-fired pizzas, every bite
						is a taste of tradition and passion. Join us for an unforgettable
						dining experience. Buon appetito!
					</p>
				</div> */}
                <ImageCarousel images={images} />
            </div>
        </main>
    );
}
