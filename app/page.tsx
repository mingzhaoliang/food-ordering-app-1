import hero0 from "@/assets/hero-0.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import ImageCarousel from "@/components/images/image-carousel";

const images = [
    { image: hero0, alt: "Pizza on brown wooden table" },
    { image: hero1, alt: "Cooked pizza inside oven" },
    { image: hero2, alt: "Truffle Mushroom Pasta" },
    { image: hero3, alt: "Roasted Meat and Dish with Tomato Sauce on the Table" },
    { image: hero4, alt: "Pasta with red sauce on white ceramic round plate" },
];

export default function Home() {

    return (
        <main>
            <div className="relative h-screen max-h-[28rem] md:max-h-[36rem] lg:max-h-[42rem] xl:max-h-[50rem] 2xl:max-h-[58rem] overflow-hidden z-0 transition-all ease-linear flex flex-col justify-center items-center">
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
