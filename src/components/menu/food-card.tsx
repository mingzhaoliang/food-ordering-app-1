import Image from "next/image";
import DisplayImage from "../ui/display-image";
import { formatter } from "@/utils/formatter";
import Link from "next/link";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { MenuItem } from "@/lib/crud/model-type";
import AddToCartButton from "./add-to-cart-button";

export default function FoodCard({ menuItem, showUnit }: { menuItem: MenuItem; showUnit?: boolean }) {
    const imageSrc = getCloudinaryUrl(`menu/${menuItem.course}/${menuItem.public_id}`);
    const imageRef = <>Photo by <Link href={menuItem.reference.owner_url} className="underline">{menuItem.reference.owner}</Link> on <Link href={menuItem.reference.url} className="underline">{menuItem.reference.platform}</Link></>

    return (
        <div className="rounded-md flex sm:flex-col sm:items-center sm:gap-2 bg-white/80 backdrop-blur overflow-hidden min-h-48 max-h-56 sm:min-h-[25.5rem] sm:max-h-[32rem] shadow-md">
            <div className="w-2/5 h-full sm:w-full sm:h-1/2 p-2">
                <DisplayImage src={imageSrc} alt={menuItem.name} imageRef={imageRef} className="relative w-full h-full rounded-md overflow-hidden" />
            </div>
            <div className="w-3/5 sm:w-full max-sm:py-2 max-sm:pr-2 sm:h-1/2 grid grid-cols-1 grid-rows-[0.5fr_1fr_0.5fr] xs:grid-rows-[0.8fr_1fr_0.8fr] gap-2">
                <div className="px-3 flex justify-between items-center gap-2">
                    <h1 className="font-bold xs:text-xl font-lato">{menuItem.name}</h1>
                    {menuItem.tags.length > 0 && <div className="flex justify-center items-center gap-1 min-w-fit bg-white rounded-full p-1">
                        {menuItem.tags.map(tag => (
                            <Image key={tag} src={`/icons/${tag}.svg`} alt="tag" draggable={false} width={18} height={18} />
                        ))}
                    </div>}
                </div>
                <p className="px-3 text-pretty max-xs:text-sm overflow-scroll">{menuItem.description}</p>

                <div className="px-3 flex justify-between items-center gap-4 xs:gap-8 max-sm:pt-2 max-sm:border-t max-sm:border-slate-800/30 sm:bg-white text-sm xs:text-md sm:text-base">
                    <div className="py-2 pl-2 flex flex-wrap">
                        <p>{formatter(menuItem.price)}</p>
                        {showUnit && <p className="whitespace-pre">{` / ${menuItem.unit.number} ${menuItem.unit.measurement}${menuItem.unit.number > 1 ? "s" : ""}`}</p>}
                    </div>
                    {menuItem.online_available
                        ? <AddToCartButton item={menuItem} />
                        : <p className="text-slate-800/60 text-sm text-pretty text-end italic">In-store dining exclusive</p>
                    }
                </div>
            </div>
        </div>
    )
}