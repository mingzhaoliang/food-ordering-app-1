"use client";

import { useScroll, useTransform } from "framer-motion";
import BriefAbout from "./brief-about";

export default function MobileBriefAbout() {

    const { scrollY } = useScroll();

    const picLeftX = useTransform(scrollY, [1200, 1500], [-200, 0]);
    const picRightX = useTransform(scrollY, [900, 1200], [200, 0]);
    const picLeftOpacity = useTransform(scrollY, [1200, 1500], [0, 1]);
    const picRightOpacity = useTransform(scrollY, [900, 1200], [0, 1]);

    return (
        <div className="md:hidden">
            <BriefAbout picLeftX={picLeftX} picRightX={picRightX} picLeftOpacity={picLeftOpacity} picRightOpacity={picRightOpacity} />
        </div>
    )
}