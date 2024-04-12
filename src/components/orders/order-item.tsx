import { Order } from "@/lib/crud/model-type";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { datetimeFormatter, priceFormatter } from "@/utils/formatter";
import ExpirationTimer from "./expiration-timer";
import { overdueTime } from "@/utils/data";
import OrderItemImages from "./order-item-images";

const tagClasses: { [key: string]: string } = {
    paid: "bg-teal-500",
    placed: "bg-amber-400",
    cancelled: "bg-rose-400",
}

export default function OrderItem({ order }: { order: Order }) {
    const craetedAt = new Date(order.created_at);
    const expiresAt = new Date(new Date(order.expires_at).getTime() - overdueTime * 1000);
    const names = order.items.map(item => item.name);
    const imageSrcs = order.items.map(item => getCloudinaryUrl(`menu/${item.course}/${item.public_id}`));

    const status = order.status === "placed" && expiresAt < new Date() ? "cancelled" : order.status;

    return (
        <div className="p-4 pr-8 rounded-lg bg-white shadow-md font-lato grid grid-cols-[auto_1fr] gap-4">
            <OrderItemImages imageSrcs={imageSrcs} names={names} />
            <div className="flex flex-col justify-between gap-2 overflow-hidden">
                <div className="grid grid-cols-[1fr_auto] gap-2">
                    <h2 className="text-xl font-bold text-nowrap overflow-hidden text-ellipsis">{names.join(", ")}</h2>
                    <ExpirationTimer orderStatus={order.status} expiresAt={expiresAt} />
                    <p className="text-sm text-slate-800/60 col-start-1 row-start-2">{datetimeFormatter(craetedAt)}</p>
                </div>
                <p>{priceFormatter(order.total_amount)}</p>
                <div className="flex justify-between items-center gap-2">
                    <p className={`${tagClasses[status]} px-2 py-[0.1rem] rounded-full text-sm self-start`}>{status.toUpperCase()}</p>
                    <button className="text-sm text-slate-800/60 underline">View details</button>
                </div>
            </div>
        </div>
    )
}