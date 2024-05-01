import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import HistoryReservation from "@/components/my/reservations/history-reservation";
import { getReservations } from "@/lib/crud/read/reservations";
import { DBReservation } from "@/types/reservations";
import { getServerSession } from "next-auth";

export default async function OrdersPage() {
	const session = await getServerSession(authOptions);

	const reservationHistory = await getReservations(session!.user.id);

	return (
		<div className="max-md:mx-auto max-xs:w-full max-sm:w-11/12 max-md:w-10/12 lg:max-w-[50rem] flex flex-col gap-4 font-lato max-md:text-md max-lg:text-base transition-all">
			{reservationHistory.map((reservation: DBReservation) => {
				return <HistoryReservation key={reservation._id} reservation={reservation} />;
			})}
		</div>
	);
}
