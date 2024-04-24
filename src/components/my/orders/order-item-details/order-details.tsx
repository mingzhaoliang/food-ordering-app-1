"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { overdueTime } from "@/utils/data";
import StatusTag from "../../../general/status-tag";
import CartSummary from "@/components/menu/cart-summary";
import ExpirationTimer from "../expiration-timer";
import PlacedOrderActions from "../further-actions/buttons/placed-order-actions";
import PaidOrderActions from "../further-actions/buttons/paid-order-actions";
import CancelledOrderActions from "../further-actions/buttons/cancelled-order-actions";
import OrderDetailsItem from "./order-details-item";
import PlacedOrderCheckout from "../further-actions/actions/placed-order-checkout";
import { myActions } from "@/lib/store/my-slice";
import { Order } from "@/lib/crud/model-type";
import { GoChevronUp } from "react-icons/go";
import OrderDetailsDeliveryInfo from "./order-details-delivery-info";

export default function OrderDetails({ order }: { order: Order }) {
    const { furtherAction } = useAppSelector(state => state.my);
    const dispatch = useAppDispatch();

    const expiresAt = new Date(new Date(order.expires_at).getTime() - overdueTime * 1000);
    const status = order.status === "placed" && expiresAt < new Date() ? "cancelled" : order.status;
    const { items, subtotal, delivery_fee, total_amount } = order;

    let statusNote = null;
    let furtherActions = null;
    let furtherActionPage = null;

    const closeHandler = () => {
        dispatch(myActions.setActiveOrder(null));
        dispatch(myActions.setFurtherAction(null));
    }

    switch (status) {
        case "placed":
            statusNote = <>Your order will expire in <ExpirationTimer orderStatus={status} expiresAt={expiresAt!} />.</>
            furtherActions = <PlacedOrderActions />
            furtherActionPage = <PlacedOrderCheckout order={order} />
            break;
        case "paid":
            statusNote = "Your order is on the way."
            furtherActions = <PaidOrderActions />
            break;

        case "cancelled":
            statusNote = "Not what you want? You can place a new order."
            furtherActions = <CancelledOrderActions />
            break;
        case "delivered":
            statusNote = "Thank you for your order. Rate our service now!"
            // to-do: add rating component
            furtherActions = null;
            break;
        default:
            break;
    }

    return (
        <>
            {!furtherAction && (
                <div className="bg-white w-full rounded-md p-4 sm:p-6 flex flex-col font-lato text-slate-800">
                    <div className="pb-1 xs:pb-2 border-b border-slate-800/20 flex justify-between items-start cursor-pointer" onClick={closeHandler}>
                        <div className="flex items-center flex-wrap gap-2 md:gap-4">
                            <h1 className="text-xl md:text-2xl">
                                <span className="hidden xxs:inline">Order </span>
                                Details
                            </h1>
                            <StatusTag status={status} />
                        </div>
                        <button className="text-sm p-2 text-slate-800/60 flex items-center">
                            <GoChevronUp /> Collapse
                        </button>
                    </div>
                    <div className="space-y-2 sm:space-y-3 md:space-y-4 py-3 xs:py-4 border-b border-slate-800/20 cursor-pointer" onClick={closeHandler}>
                        {items.map(item => <OrderDetailsItem key={item.menu_id} item={item} />)}
                    </div>
                    <CartSummary subtotal={subtotal} deliveryFee={delivery_fee} total={total_amount} />
                    <OrderDetailsDeliveryInfo deliveryDetails={order.delivery_details} />
                    <div className="max-lg:text-sm text-slate-800/60 flex items-center py-3 xs:py-4">
                        {statusNote}
                    </div>
                    {furtherActions}
                </div>
            )}
            {furtherAction && furtherActionPage}
        </>
    )

}