import FilledButton from "@/components/ui/button/filled-button";
import Link from "next/link";

export default function WelcomeMessage() {
	return (
		<div className="w-full h-full px-8 xl:px-10 flex flex-col justify-center items-center">
			<div className="relative z-10 max-w-[24rem] border-2 p-1 border-slate-800">
				<div className="px-[0.4rem] py-4 transition-all duration-300 flex flex-col justify-between items-center gap-2 xs:gap-3 xl:gap-4 border border-slate-800">
					<h1 className="text-2xl text-center md:text-3xl lg:text-4xl font-portLligatSans text-slate-800">
						Benvenuti!
					</h1>
					<p className="w-11/12 xs:w-10/12 text-xl md:text-2xl lg:text-3xl font-portLligatSans text-pretty text-center lg:leading-normal">
						{`Indulge in Melbourne's finest, artisanal Italian cuisine.`}
					</p>
					<div className="w-10/12 xs:w-9/12 md:text-lg lg:text-xl">
						<FilledButton type="button" colour="slate">
							<Link href="/#reservation" className="block py-1 font-medium">
								Reserve a Table
							</Link>
						</FilledButton>
					</div>
					<div className="w-10/12 xs:w-9/12 md:text-lg lg:text-xl">
						<FilledButton type="button" colour="slate">
							<Link href="/menu/antipasti" className="block py-1 font-medium">
								Order Now
							</Link>
						</FilledButton>
					</div>
				</div>
			</div>
		</div>
	);
}
