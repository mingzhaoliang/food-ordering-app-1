import Image from "next/image";
import background from "../../../public/images/photo-of-vegetable-salad-in-bowls.webp";
import pizza from "../../../public/icons/pizza.png";

export default function MainLoadingPage() {
	return (
		<div className="relative h-screen w-screen z-[100] flex justify-center items-center bg-slate-100 text-slate-900">
			<div className="fixed top-0 left-0 w-screen h-screen z-0 object-cover overflow-hidden">
				<Image
					src={background}
					alt="Photo of vegetable salad in bowls"
					className="w-full h-full object-cover object-center"
					priority
					fill
					draggable={false}
					placeholder="blur"
				/>
			</div>
			<div className="z-10 shadow-xl pt-8 pb-6 sm:pt-12 sm:pb-10 min-w-52 sm:min-w-60 md:min-w-64 bg-white rounded-xl flex flex-col justify-center items-center gap-6 transition-all">
				<div className="rounded-full border-2 border-amber-300 p-[0.1rem] w-16 h-16 aspect-square flex justify-center items-center shadow animate-spin-medium">
					<Image
						src={pizza}
						alt="Pizza"
						width={60}
						height={60}
						className="rounded-full border border-amber-300 object-cover p-2"
						priority
						placeholder="blur"
						loading="eager"
					/>
				</div>
				Loading...
			</div>
		</div>
	);
}
