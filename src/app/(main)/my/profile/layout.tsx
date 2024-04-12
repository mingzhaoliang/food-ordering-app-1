export default function ProfilePageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full md:row-start-2 md:col-span-6 rounded-md">
            {children}
        </div>
    )
}