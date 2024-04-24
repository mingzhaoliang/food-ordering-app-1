"use client";

import { refreshPage } from "@/lib/actions";
import { durationFormatter } from "@/utils/formatter";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function ExpirationTimer({
    orderStatus,
    expiresAt,
}: {
    orderStatus: string;
    expiresAt: Date;
}) {
    const [timeExpired, setTimeExpired] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const timer = useRef<NodeJS.Timeout | undefined>();
    const pathname = usePathname();

    useEffect(() => {
        const timeDifference = expiresAt.getTime() - new Date().getTime();

        if (orderStatus === "placed" && timeDifference >= 0) {
            setTimeLeft(timeDifference);
            timer.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 0) {
                        setTimeExpired(true);
                        clearInterval(timer.current!);
                        return 0;
                    }
                    return prev - 1000;
                });
            }, 1000);
        }

        return () => clearInterval(timer.current!);
    }, [expiresAt, orderStatus, pathname]);

    useEffect(() => {
        if (timeExpired) {
            refreshPage(pathname, "page");
        }
    }, [timeExpired]);

    return (
        <>
            {orderStatus === "placed" && timeLeft > 0 && (
                <p className="px-2 py-[0.1rem] text-rose-500 max-lg:text-sm font-semibold">
                    {durationFormatter(timeLeft)}
                </p>
            )}
        </>
    );
}
