import Image from "next/image";

export default function IconButton({
	children,
	src,
	alt,
	onClick,
}: {
	children?: React.ReactNode;
	src: string;
	alt: string;
	onClick?: () => void;
}) {
	return (
		<div
			className="rounded-full bg-white hover:bg-stone-100 shadow-md p-[0.6rem] cursor-pointer flex gap-1 items-center"
			onClick={onClick}
		>
			<div className="w-4 h-4 xs:w-5 xs:h-5">
				<Image
					src={src}
					alt={alt}
					draggable={false}
					width={16}
					height={16}
					className={`m-auto w-full h-full`}
				/>
			</div>
			<div className="max-md:hidden text-slate-800 text-md px-1 max-w-28 text-ellipsis overflow-hidden">
				{children}
			</div>
		</div>
	);
}
