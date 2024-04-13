import { CartItem } from "@/lib/crud/model-type";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { priceFormatter } from "@/utils/formatter";
import Image from "next/image";

export default function OrderItemDetailsItem({ item }: { item: CartItem }) {
    return (
        <div key={item.menu_id} className="grid grid-cols-[auto_1fr] gap-2 xxs:gap-4">
            <div className="w-20 h-full relative rounded-md overflow-hidden">
                <Image src={getCloudinaryUrl(`menu/${item.course}/${item.public_id}`)} alt={item.name} fill sizes="100% 100%" className="w-20 h-20 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1 justify-between overflow-hidden">
                <h2 className="xxs:text-lg font-bold text-wrap leading-tight">{item.name}</h2>
                <p className="text-xs xxs:text-sm xs:text-base">{priceFormatter(item.price)}</p>
                <p className="text-xs xxs:text-sm xs:text-base text-slate-800/60">Qty {item.quantity}</p>
            </div>
        </div>
    )
}