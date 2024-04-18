"use client";

import { useScroll, useTransform } from "framer-motion";
import BriefAbout from "./brief-about";

export default function MainBriefAbout() {

    const { scrollY } = useScroll();

    const picLeftX = useTransform(scrollY, [1400, 1700], [-200, 0]);
    const picRightX = useTransform(scrollY, [1100, 1400], [200, 0]);
    const picLeftOpacity = useTransform(scrollY, [1400, 1700], [0, 1]);
    const picRightOpacity = useTransform(scrollY, [1100, 1400], [0, 1]);

    return (
        <div className="max-md:hidden">
            <BriefAbout picLeftX={picLeftX} picRightX={picRightX} picLeftOpacity={picLeftOpacity} picRightOpacity={picRightOpacity} />
        </div>
    )
}