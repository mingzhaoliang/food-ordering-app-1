import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={router.back}
            className="w-full px-4 py-2 text-slate-400 hover:text-slate-900 transition-all duration-300"
        >
            Back
        </button>
    );
}
