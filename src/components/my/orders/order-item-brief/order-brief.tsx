"use client";

import { Order } from "@/lib/crud/model-type";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import { datetimeFormatter, priceFormatter } from "@/utils/formatter";
import ExpirationTimer from "../expiration-timer";
import { overdueTime } from "@/utils/data";
import OrderBriefImages from "./order-brief-images";
import OrderStatusTag from "../order-status-tag";
import { useAppDispatch } from "@/lib/store/hooks";
import { ordersActions } from "@/lib/store/orders-slice";

export default function OrderBrief({ order }: { order: Order }) {
    const dispatch = useAppDispatch();

    const createdAt = new Date(order.created_at);
    const expiresAt = new Date(new Date(order.expires_at).getTime() - overdueTime * 1000);
    const names = order.items.map(item => item.name);
    const imageSrcs = order.items.map(item => getCloudinaryUrl(`menu/${item.course}/${item.public_id}`));

    const status = order.status === "placed" && expiresAt < new Date() ? "cancelled" : order.status;

    const clickHandler = () => {
        dispatch(ordersActions.setFurtherAction(null));
        dispatch(ordersActions.setActiveOrder(order._id));
    }

    return (
        <div className="p-2 xs:pr-4 xl:p-4 xl:pr-8 rounded-lg bg-white shadow-md font-lato grid grid-cols-1 xs:grid-cols-[auto_1fr] gap-2 xs:gap-4 cursor-pointer" onClick={clickHandler}>
            <OrderBriefImages imageSrcs={imageSrcs} names={names} />
            <div className="flex flex-col justify-between gap-2 overflow-hidden">
                <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                    <h2 className="text-lg xxs:text-xl font-bold text-nowrap overflow-hidden text-ellipsis max-xs:col-span-2">{names.join(", ")}</h2>
                    {
                        status === "placed" && (
                            <div className="max-xs:row-start-2 max-xs:col-start-2 border-[1.5px] border-dashed border-rose-500">
                                <ExpirationTimer orderStatus={order.status} expiresAt={expiresAt} />
                            </div>
                        )}
                    <p className="text-sm text-slate-800/60 xs:col-span-2 row-start-2">{datetimeFormatter(createdAt)}</p>
                </div>
                <p>{priceFormatter(order.total_amount)}</p>
                <div className="flex justify-between items-center gap-2">
                    <OrderStatusTag status={status} />
                    <button className="text-sm text-slate-800/60 underline">View details</button>
                </div>
            </div>
        </div>
    )
}