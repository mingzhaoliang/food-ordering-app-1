const tagClasses: { [key: string]: string } = {
    paid: "bg-teal-500",
    confirmed: "bg-teal-500",
    placed: "bg-amber-400",
    cancelled: "bg-rose-400",
}

export default function StatusTag({ status }: { status: string }) {
    return (
        <p className={`${tagClasses[status]} px-2 py-[0.1rem] rounded-full text-xs xxs:text-sm place-content-center`}>{status.toUpperCase()}</p>
    )
}