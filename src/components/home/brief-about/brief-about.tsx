"use client";

import { images, briefAbout } from "@/utils/data";
import DisplayImage from "../../ui/display-image";
import Card from "./card";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BriefAbout({ picLeftX, picRightX, picLeftOpacity, picRightOpacity }: { picLeftX: any, picRightX: any, picLeftOpacity: any, picRightOpacity: any }) {

    // const { scrollYProgress } = useScroll();
    // const picLeftX = useTransform(scrollYProgress, [0.7, 0.8], [-200, 0]);
    // const picRightX = useTransform(scrollYProgress, [0.6, 0.7], [200, 0]);
    // const picLeftOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
    // const picRightOpacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);

    return (
        <div id="brief-about" className="relative w-screen max-w-[80rem] mx-auto pb-20 pt-10 xs:pt-12 sm:pt-16 md:py-24 lg:pt-28 lg:pb-24 xl:pt-32 xl:pb-28 2xl:pt-36 2xl:pb-32 space-y-16 md:space-y-20 lg:space-y-28 2xl:space-y-36">
            <div className="relative flex w-full justify-end">
                <DisplayImage
                    src={images.background3.src}
                    alt={images.background3.alt}
                    imageRef={images.background3.ref}
                    className="absolute top-0 bottom-0 left-0 right-[calc(min(100vw,_80rem)_*_1/4)] -z-10 overflow-hidden transition-all duration-300"
                />
                <motion.div
                    style={{
                        x: picRightX,
                        opacity: picRightOpacity,
                    }}
                    className="w-1/2 md:w-[calc(min(100vw,_80rem)_*_11/24)] max-w-[60rem] px-4 lg:px-6 xl:pr-0 bg-white"
                >
                    <Card title={briefAbout.story.title} description={briefAbout.story.description} />
                </motion.div>
            </div>
            <div className="relative flex w-full justify-start">
                <motion.div
                    style={{
                        x: picLeftX,
                        opacity: picLeftOpacity,
                    }}
                    className="w-1/2 md:w-[calc(min(100vw,_80rem)_*_11/24)] max-w-[60rem] px-4 lg:px-6 xl:pl-0 bg-white"
                >
                    <Card title={briefAbout.services.title} description={briefAbout.services.description} />
                </motion.div>
                <DisplayImage
                    src={images.background4.src}
                    alt={images.background4.alt}
                    imageRef={images.background4.ref}
                    className="absolute top-0 bottom-0 right-0 left-[calc(min(100vw,_80rem)_*_1/4)] -z-10 overflow-hidden transition-all duration-300"
                />
            </div>
        </div>
    )
}