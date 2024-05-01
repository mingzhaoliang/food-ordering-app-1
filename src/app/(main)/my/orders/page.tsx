import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import HistoryOrder from "@/components/my/orders/history-order";
import { getOrders } from "@/lib/crud/read/orders";
import { DBOrder } from "@/types/orders";
import { getServerSession } from "next-auth";

export default async function OrdersPage() {
	const session = await getServerSession(authOptions);

	const orderHistory = await getOrders(session!.user.id);

	return (
		<div className="max-md:mx-auto max-xs:w-full max-sm:w-11/12 max-md:w-10/12 lg:max-w-[50rem] flex flex-col gap-4 font-lato max-md:text-md max-lg:text-base transition-all">
			{orderHistory.map((order: DBOrder) => {
				return <HistoryOrder key={order._id} order={order} />;
			})}
		</div>
	);
}
