import { DeliveryDetails } from "@/lib/crud/model-type";

export default function OrderDetailsDeliveryInfo({ deliveryDetails }: { deliveryDetails: DeliveryDetails }) {
    const { username, street, city, state, postcode } = deliveryDetails;

    return (
        <div className="flex flex-col gap-2 py-3 xs:py-4 border-b border-slate-800/20">
            <div className="flex justify-between gap-2">
                <p className="font-bold">Deliver to: </p>
                <p>{username}</p>
            </div>
            <div className="flex justify-between gap-2">
                <p className="font-bold text-nowrap">Delivery Address: </p>
                <p className="text-end text-balance">{`${street}, ${city}, ${state} ${postcode}`}</p>
            </div>
        </div>
    )
}