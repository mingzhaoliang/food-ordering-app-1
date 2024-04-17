"use client";

import { useScroll, useTransform } from "framer-motion";
import BriefAbout from "./brief-about";

export default function MobileBriefAbout() {

    const { scrollYProgress } = useScroll();
    const picLeftX = useTransform(scrollYProgress, [0.5, 0.6], [-200, 0]);
    const picRightX = useTransform(scrollYProgress, [0.3, 0.4], [200, 0]);
    const picLeftOpacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
    const picRightOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

    return (
        <div className="md:hidden">
            <BriefAbout picLeftX={picLeftX} picRightX={picRightX} picLeftOpacity={picLeftOpacity} picRightOpacity={picRightOpacity} />
        </div>
    )
}