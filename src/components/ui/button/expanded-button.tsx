import { useAppSelector } from "@/lib/store/hooks";
import shimmerPlaceholder from "@/utils/image-shimmer-placeholder";
import Image from "next/image";

export default function ExpandedButton({
	id,
	src,
	onClick,
	children,
}: {
	id: "antipasti" | "primi" | "secondi" | "dolci";
	src: string;
	onClick: () => void;
	children: React.ReactNode;
}) {
	const { activeCourse } = useAppSelector((state) => state.home);

	return (
		<button
			id={id}
			draggable={false}
			className={`w-full p-1 xs:px-2 md:px-3 xs:py-[0.4rem] flex justify-around items-center rounded-full transition-all duration-300 overflow-hidden ${activeCourse === id ? "bg-teal-600/50" : "bg-white hover:bg-teal-600/20"} shadow-md`}
			onClick={onClick}
		>
			<div
				className={
					"relative rounded-full overflow-hidden w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12"
				}
			>
				<Image
					src={src}
					alt={id}
					fill
					sizes="100% 100%"
					draggable={false}
					className={"p-1 transition-all duration-300"}
					placeholder={shimmerPlaceholder(50, 50)}
				/>
			</div>
			<div
				className={
					"max-sm:hidden flex-1 font-portLligatSans md:text-lg lg:text-xl xl:text-[1.35rem] text-slate-800 transition-all duration-300 origin-left"
				}
			>
				{children}
			</div>
		</button>
	);
}
