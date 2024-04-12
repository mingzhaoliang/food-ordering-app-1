import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import OrderItem from "@/components/my/orders/order-item";
import { Order } from "@/lib/crud/model-type";
import { getOrders } from "@/lib/crud/order"
import { getServerSession } from "next-auth";

export default async function OrdersPage() {
    const session = await getServerSession(authOptions);

    const orderHistory = await getOrders(session!.user.id);

    return (
        <div className="max-md:mx-auto max-xs:w-full max-sm:w-11/12 max-md:w-10/12 md:max-w-[50rem] flex flex-col gap-4 font-lato max-md:text-md max-lg:text-base transition-all">
            {
                orderHistory.map((order: Order) => {
                    const date = new Date(order.created_at);
                    return (
                        <OrderItem key={order._id} order={order} />
                    )
                })
            }
        </div>
    )
}