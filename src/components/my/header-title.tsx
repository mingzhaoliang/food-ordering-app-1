"use client";

import { usePathname } from "next/navigation";

export default function HeaderTitle() {
    const pathname = usePathname();
    const activePage = pathname.split("/")[2];

    let title;

    switch (activePage) {
        case "profile":
            title = "Profile";
            break;
        case "orders":
            title = (
                <p className="flex flex-nowrap whitespace-pre">
                    Order<span className="xl:hidden">s</span><span className="max-xl:hidden"> History</span>
                </p>
            );
            break;
        case "settings":
            title = "Settings";
            break;
        default:
            title = "Account";
            break;
    }

    switch (pathname) { }
    return (
        <h1 className="font-portLligatSans text-4xl sm:text-5xl lg:text-6xl max-md:text-center flex whitespace-pre">
            Your <span className="">{title}</span>
        </h1>
    )
}