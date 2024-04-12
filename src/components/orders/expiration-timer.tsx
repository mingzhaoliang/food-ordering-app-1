"use client";

import { refreshPage } from "@/lib/actions";
import { durationFormatter } from "@/utils/formatter";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ExpirationTimer({ orderStatus, expiresAt }: { orderStatus: string, expiresAt: Date }) {
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const timer = useRef<NodeJS.Timeout | undefined>();
    const pathname = usePathname();

    useEffect(() => {
        const timeDifference = expiresAt.getTime() - new Date().getTime();

        if (timeDifference <= 0) {
            refreshPage(pathname, "page")
        }

        setTimeLeft(timeDifference);
        timer.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer.current!);
                    return 0;
                }
                return prev - 1000;
            });
        }, 1000);

        return () => clearInterval(timer.current!);
    }, [expiresAt]);

    return (
        <>
            {orderStatus === "placed" && timeLeft > 0 && <p className="text-rose-500 text-sm font-semibold">{durationFormatter(timeLeft)}</p>}
        </>
    )
}