"use client";

import { useScroll, useTransform } from "framer-motion";
import BriefAbout from "./brief-about";

export default function MainBriefAbout() {
    const { scrollY } = useScroll();

    const picLeftX = useTransform(scrollY, [2150, 2450], [-200, 0]);
    const picRightX = useTransform(scrollY, [1850, 2150], [200, 0]);
    const picLeftOpacity = useTransform(scrollY, [2150, 2450], [0, 1]);
    const picRightOpacity = useTransform(scrollY, [1850, 2150], [0, 1]);

    return (
        <div className="max-lg:hidden">
            <BriefAbout
                picLeftX={picLeftX}
                picRightX={picRightX}
                picLeftOpacity={picLeftOpacity}
                picRightOpacity={picRightOpacity}
            />
        </div>
    );
}
