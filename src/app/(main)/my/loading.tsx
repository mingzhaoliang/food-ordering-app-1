import Spinner from "@/components/ui/spinner";

export default function AccountLoading() {
    return (
        <div className="max-w-[50rem] p-10 bg-white shadow-md rounded-lg place-content-center">
            <Spinner fallback="Loading..." />
        </div>
    );
}
