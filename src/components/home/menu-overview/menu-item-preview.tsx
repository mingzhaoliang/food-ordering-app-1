"use client";

import LinkButtonRectangular from "@/components/ui/link-button-rectangular";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { shortPriceFormatter } from "@/utils/formatter";

export default function MenuItemPreview({
    public_id,
    course,
    name,
    description,
    tags,
    online_available,
    price,
}: {
    public_id: string,
    course: string,
    name: string,
    description: string,
    tags: string[],
    online_available: boolean,
    price: number,
}) {
    const [isHovered, setIsHovered] = useState(false);

    const mouseEnterHandler = () => {
        setIsHovered(true);
    }

    const mouseLeaveHandler = () => {
        setIsHovered(false);
    }

    return (
        <div
            className="relative min-w-48 sm:min-w-56 md:min-w-64 lg:min-w-72 h-64 xs:h-72 sm:h-80 md:h-[22rem] lg:h-96 bg-slate-400/[.01] px-2 py-4 sm:px-4 sm:py-6 rounded-2xl shadow overflow-hidden grid grid-rows-[5fr_2fr_3fr] justify-items-center items-center font-lato"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <p className="absolute top-2 left-2 p-2 text-slate-800 max-sm:text-md">
                {shortPriceFormatter(price)}
            </p>
            <div className="absolute top-2 right-2">
                {tags.length > 0 && (
                    <div className="flex justify-center items-center gap-1 min-w-fit rounded-full p-1">
                        {tags.map(tag => (
                            <div key={tag} className="relative w-6 h-6 md:w-7 md:h-7 rounded-full border border-dashed border-teal-600/50">
                                <Image src={`/icons/${tag}.svg`} alt="tag" draggable={false} fill sizes="100% 100%" className="p-1 object-cover" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative h-full aspect-square rounded-full overflow-hidden">
                <Image src={getCloudinaryUrl(`menu/${course}/${public_id}`)} alt={name} fill sizes="100% 100%" className="p-2 aspect-square object-cover rounded-full" />
            </div>
            <h1 className="xs:text-lg lg:text-xl 3xl:text-2xl text-slate-800 leading-tight text-center w-10/12">{name}</h1>
            <AnimatePresence mode="wait">
                {isHovered
                    ? (
                        <motion.div
                            key={`button-${name}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.15 }}
                            className="flex-1 flex items-start"
                        >
                            <LinkButtonRectangular href={`menu/${course}`} className="" text={`${online_available ? "Order Now" : "Book a Table"}`} />
                        </motion.div>
                    )
                    : (
                        <motion.p
                            key={`description-${name}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="flex-1 text-balance text-center text-sm sm:text-base"
                        >
                            {description}
                        </motion.p>
                    )}
            </AnimatePresence>
        </div>
    )
}