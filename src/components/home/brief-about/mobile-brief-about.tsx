"use client";

import { useScroll, useTransform } from "framer-motion";
import BriefAbout from "./brief-about";

export default function MobileBriefAbout() {
    const { scrollY } = useScroll();

    const picLeftX = useTransform(scrollY, [2200, 2500], [-200, 0]);
    const picRightX = useTransform(scrollY, [1800, 2100], [200, 0]);
    const picLeftOpacity = useTransform(scrollY, [2200, 2500], [0, 1]);
    const picRightOpacity = useTransform(scrollY, [1800, 2100], [0, 1]);

    return (
        <div className="lg:hidden">
            <BriefAbout
                picLeftX={picLeftX}
                picRightX={picRightX}
                picLeftOpacity={picLeftOpacity}
                picRightOpacity={picRightOpacity}
            />
        </div>
    );
}
