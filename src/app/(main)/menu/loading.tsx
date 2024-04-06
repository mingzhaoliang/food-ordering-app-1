import Spinner from "@/components/ui/spinner";

export default function MenuLoadingPage() {
    return (
        <div className="p-10 bg-white/85 backdrop-blur rounded-md">
            <Spinner fallback="Loading menu..." />
        </div>
    )
}