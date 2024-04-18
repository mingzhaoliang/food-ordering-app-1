"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FoodCardDescription({ description }: { description: string }) {
    const descRef = useRef<HTMLDivElement>(null);
    const [scrollable, setScrollable] = useState(false);

    const { scrollYProgress } = useScroll({
        container: descRef,
        axis: "y",
    });

    const maskOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    useEffect(() => {
        function checkScrollable() {
            if (descRef.current) {
                setScrollable(descRef.current.scrollHeight > descRef.current.clientHeight);
            }
        }

        checkScrollable();
        window.addEventListener("resize", checkScrollable);

        return () => {
            window.removeEventListener("resize", checkScrollable);
        }
    }, [descRef])

    return (
        <div className="relative w-full h-full py-2 mt-1">
            {scrollable && (
                <>
                    <motion.div
                        className={`absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-[#FAFDFD] from-10% via-transparent via-30%`}
                        style={{ opacity: scrollYProgress, }}
                    />
                    <motion.div
                        className={`absolute inset-0 pointer-events-none z-10 bg-gradient-to-t from-[#FAFDFD] from-15% via-transparent via-50%`}
                        style={{ opacity: maskOpacity, }}
                    />
                    {/* <motion.div
                        className="absolute p-2 z-20 w-full bottom-0 rounded-full bg-transparent pointer-events-none"
                        style={{
                            opacity: maskOpacity,
                        }}
                    // onClick={scrollHandler}
                    >
                        <FiChevronsDown className="mx-auto" />
                    </motion.div> */}
                </>
            )}
            {/* <p className="px-3 text-pretty max-xs:text-sm overflow-scroll">{description}</p> */}
            <div ref={descRef} className="w-full h-full max-h-20 sm:max-h-24 overflow-scroll">
                <p className="mx-3 text-pretty text-sm xs:text-md xs:leading-snug">{description}</p>
            </div>
        </div>
    )
}