import Link from "next/link";

export default function SettingsPage() {
    return (
        // add payment methods, change password, change email, change name, change address
        <div className="p-8 max-w-[50rem] min-h-80 h-full flex justify-center items-center bg-white rounded-lg">
            <Link
                href="/api/auth/signout"
                className="px-4 py-2 rounded-md border border-slate-800 hover:bg-slate-800 text-slate-800 hover:text-white transition-all duration-300"
            >
                Sign out
            </Link>
        </div>
    );
}
