"use client";

import { useScroll, useTransform } from "framer-motion";
import BriefAbout from "./brief-about";

export default function MainBriefAbout() {

    const { scrollYProgress } = useScroll();
    const picLeftX = useTransform(scrollYProgress, [0.7, 0.8], [-200, 0]);
    const picRightX = useTransform(scrollYProgress, [0.6, 0.7], [200, 0]);
    const picLeftOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
    const picRightOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

    return (
        <div className="max-md:hidden">
            <BriefAbout picLeftX={picLeftX} picRightX={picRightX} picLeftOpacity={picLeftOpacity} picRightOpacity={picRightOpacity} />
        </div>
    )
}