import Image from "next/image";
import background from "../../public/images/photo-of-vegetable-salad-in-bowls.webp";
import FilledButton from "@/components/ui/button/filled-button";
import Link from "next/link";

export default function NotFound() {
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
			<div className="mx-4 px-5 py-6 sm:p-8 space-y-6 z-10 shadow-xl w-96 bg-white rounded-xl font-lato">
				<h2 className="text-xl md:text-2xl font-bold">{`Oops! We couldn't find the page you're looking for...`}</h2>
				<p>
					This page may have been moved or is currently being updated. Please check the
					URL is correct.
				</p>
				<Link href="/menu" className="block" draggable={false}>
					<FilledButton colour="teal" type="button">
						Explore our menu
					</FilledButton>
				</Link>
			</div>
		</div>
	);
}
