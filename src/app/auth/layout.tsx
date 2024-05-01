import Image from "next/image";
import background from "../../../public/images/photo-of-vegetable-salad-in-bowls.webp";
import shimmerPlaceholder from "@/utils/image-shimmer-placeholder";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen w-screen flex justify-center items-center bg-slate-100 text-slate-900">
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
			<div className="z-10 shadow-xl max-[480px]:px-6 max-[480px]:pt-8 px-8 pt-10 pb-4 sm:min-w-80 xl:min-w-96 bg-white rounded-xl flex flex-col justify-center items-center gap-4 transition-all">
				<div className="rounded-full border-2 border-amber-300 p-[0.1rem] w-16 h-16 aspect-square flex justify-center items-center shadow animate-spin-slow">
					<Image
						src="/icons/pizza.png"
						alt="Pizza"
						width={60}
						height={60}
						className="rounded-full border border-amber-300 object-cover p-2"
						priority
						placeholder={shimmerPlaceholder(60, 60)}
					/>
				</div>
				{children}
			</div>
		</div>
	);
}
