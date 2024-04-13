import { Order } from "@/lib/crud/model-type";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { datetimeFormatter, priceFormatter } from "@/utils/formatter";
import ExpirationTimer from "./expiration-timer";
import { overdueTime } from "@/utils/data";
import OrderItemImages from "./order-item-images";
import ViewDetails from "./view-details";
import OrderStatusTag from "./order-status-tag";

export default function OrderItem({ order }: { order: Order }) {
    const createdAt = new Date(order.created_at);
    const expiresAt = new Date(new Date(order.expires_at).getTime() - overdueTime * 1000);
    const names = order.items.map(item => item.name);
    const imageSrcs = order.items.map(item => getCloudinaryUrl(`menu/${item.course}/${item.public_id}`));

    const status = order.status === "placed" && expiresAt < new Date() ? "cancelled" : order.status;

    return (
        <div className="p-2 xs:pr-4 xl:p-4 xl:pr-8 rounded-lg bg-white shadow-md font-lato grid grid-cols-1 xs:grid-cols-[auto_1fr] gap-4">
            <OrderItemImages imageSrcs={imageSrcs} names={names} />
            <div className="flex flex-col justify-between gap-2 overflow-hidden">
                <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                    <h2 className="text-xl font-bold text-nowrap overflow-hidden text-ellipsis max-xs:col-span-2">{names.join(", ")}</h2>
                    <div className="max-xs:row-start-2 max-xs:col-start-2 border-[1.5px] border-dashed border-rose-500">
                        <ExpirationTimer orderStatus={order.status} expiresAt={expiresAt} />
                    </div>
                    <p className="text-sm text-slate-800/60 xs:col-span-2 row-start-2">{datetimeFormatter(createdAt)}</p>
                </div>
                <p>{priceFormatter(order.total_amount)}</p>
                <div className="flex justify-between items-center gap-2">
                    <OrderStatusTag status={status} />
                    <ViewDetails order={order} />
                </div>
            </div>
        </div>
    )
}