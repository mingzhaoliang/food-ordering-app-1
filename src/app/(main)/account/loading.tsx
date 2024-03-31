import Spinner from "@/components/ui/spinner";

export default function AccountLoading() {
    return (
        <div className="p-10 bg-white shadow-md place-content-center">
            <Spinner fallback="Loading..." />
        </div>
    )
}