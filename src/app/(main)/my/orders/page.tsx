import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { Order } from "@/lib/crud/model-type";
import { getOrders } from "@/lib/crud/order"
import { datetimeFormatter } from "@/utils/formatter";
import { getServerSession } from "next-auth";

export default async function OrdersPage() {
    const session = await getServerSession(authOptions);

    const orderHistory = await getOrders(session!.user.id);

    return (
        <div className="p-8 flex flex-col gap-4 font-lato max-md:text-md max-lg:text-base transition-all">
            {
                orderHistory.map((order: Order) => {
                    const date = new Date(order.created_at);
                    return (
                        <div key={order._id} className="p-4 rounded-md border border-gray-300">
                            <h2 className="text-xl font-bold">Order ID: {order._id}</h2>
                            <p className="text-lg">Total: ${order.total_amount}</p>
                            <p className="text-lg">Status: {order.status}</p>
                            <p className="text-lg">Ordered on: {datetimeFormatter(date)}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}