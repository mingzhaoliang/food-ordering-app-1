import { CartItem } from "@/lib/crud/model-type";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { priceFormatter } from "@/utils/formatter";
import Image from "next/image";

export default function OrderDetailsItem({ item }: { item: CartItem }) {
    return (
        <div key={item.menu_id} className="grid grid-cols-[auto_1fr] gap-4">
            <div className="w-20 h-full relative rounded-md overflow-hidden">
                <Image src={getCloudinaryUrl(`menu/${item.course}/${item.public_id}`)} alt={item.name} fill sizes="100% 100%" className="w-20 h-20 object-cover rounded-lg" />
            </div>
            <div className="flex flex-col gap-1 justify-between">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p>{priceFormatter(item.price)}</p>
                <p className="text-sm text-slate-800/60">Qty {item.quantity}</p>
            </div>
        </div>
    )
}