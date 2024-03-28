export default function AuthContent({ title, message, children }: { title: string, message: string, children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 font-lato max-[480px]:text-sm">
            <h1 className="font-semibold max-[480px]:text-2xl text-3xl text-center max-[480px]:mb-0 mb-2 transition-all">{title}</h1>
            <p className="p-4 transition-all">{message}</p>
            {children}
        </div>
    )
}