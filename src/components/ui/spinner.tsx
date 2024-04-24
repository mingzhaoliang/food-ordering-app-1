export default function Spinner({ fallback }: { fallback: string }) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
            <div className="w-12 h-12 rounded-full border-gray-400 border-l-2 border-b-2 border-t-transparent animate-spin" />
            <p className="max-w-md leading-loose text-center text-pretty whitespace-pre-wrap">
                {fallback}
            </p>
        </div>
    );
}
