import { dateFormatter } from "@/utils/formatter";

export default function ReservationDetails({
    name,
    email,
    mobileNumber,
    selectedDate,
    selectedTime,
    guests,
    specialRequests,
}: {
    name: string;
    email: string;
    mobileNumber: string;
    selectedDate: Date;
    selectedTime: string;
    guests: number;
    specialRequests: string;
}) {
    return (
        <div className="grid grid-cols-2 gap-2">
            <p>Name</p>
            <p className="overflow-scroll">{name}</p>
            <p>Email</p>
            <p className="overflow-scroll">{email}</p>
            <p>Mobile Number</p>
            <p className="overflow-scroll">{mobileNumber}</p>
            <p>Date</p>
            <p className="overflow-scroll">{dateFormatter(selectedDate)}</p>
            <p>Time</p>
            <p className="overflow-scroll">{selectedTime}</p>
            <p>Number of Guests</p>
            <p className="overflow-scroll">{guests}</p>
            <p>Special Requests</p>
            <p className="overflow-scroll">{specialRequests || "None"}</p>
        </div>
    );
}
