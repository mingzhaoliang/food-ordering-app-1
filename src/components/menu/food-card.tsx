import Image from "next/image";
import DisplayImage from "../ui/display-image";
import { priceFormatter } from "@/utils/formatter";
import Link from "next/link";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { MenuItem } from "@/lib/crud/model-type";
import AddToCartButton from "./add-to-cart-button";
import FoodCardDescription from "./food-card-description";

export default function FoodCard({ menuItem }: { menuItem: MenuItem }) {
	const imageSrc = getCloudinaryUrl(`menu/${menuItem.course}/${menuItem.public_id}`);
	const imageRef = (
		<>
			Photo by{" "}
			<Link href={menuItem.reference.owner_url} className="underline">
				{menuItem.reference.owner}
			</Link>{" "}
			on{" "}
			<Link href={menuItem.reference.url} className="underline">
				{menuItem.reference.platform}
			</Link>
		</>
	);

	return (
		<div className="rounded-2xl max-sm:p-2 overflow-hidden bg-[#FAFDFD] shadow-md min-h-48 sm:h-96 grid grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] xs:grid-cols-[2fr_3fr] sm:grid-cols-1 grid-rows-[1fr_2fr_1fr] sm:grid-rows-[12rem_3rem_5.5rem_3.5rem]">
			<div className="sm:p-2 max-sm:min-h-36 max-sm:row-span-3">
				<div className="w-full h-full rounded-xl overflow-hidden">
					<DisplayImage src={imageSrc} alt={menuItem.name} imageRef={imageRef} />
				</div>
			</div>

			<div className="mx-3 mt-2 flex justify-between items-center gap-2">
				<h1 className="font-bold xs:text-lg xl:text-xl font-lato xs:leading-tight">
					{menuItem.name}
				</h1>
				{menuItem.tags.length > 0 && (
					<div className="flex justify-center items-center gap-1 min-w-fit bg-white rounded-full p-1">
						{menuItem.tags.map((tag) => (
							<Image
								key={tag}
								src={`/icons/${tag}.svg`}
								alt="tag"
								draggable={false}
								width={18}
								height={18}
							/>
						))}
					</div>
				)}
			</div>
			<FoodCardDescription description={menuItem.description} />
			<div className="max-sm:mx-3 sm:mt-1 sm:px-3 pt-2 sm:py-2 sm:w-full sm:bg-white flex justify-between items-center gap-2 max-sm:border-t max-sm:border-slate-800/30">
				<p className="py-2 sm:pl-2 text-sm xs:text-md sm:text-base">
					{priceFormatter(menuItem.price)}
				</p>
				{menuItem.online_available ? (
					<AddToCartButton item={menuItem} />
				) : (
					<p className="text-slate-800/60 text-pretty text-end italic text-sm">
						In-store dining exclusive
					</p>
				)}
			</div>
		</div>
	);
}
