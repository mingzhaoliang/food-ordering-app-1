"use client";

import LinkButtonRectangular from "@/components/ui/link-button-rectangular";
import { getCloudinaryUrl } from "@/utils/cloudinary-configs";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/lib/crud/model-type";

export default function MenuItemPreview({
    public_id,
    course,
    name,
    description,
    tags,
    online_available,
}: {
    public_id: string,
    course: string,
    name: string,
    description: string,
    tags: string[],
    online_available: boolean,
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
            className="relative bg-teal-600/[.02] h-56 xs:h-64 sm:h-80 md:h-96 px-2 py-4 sm:px-4 sm:py-6 rounded-2xl shadow-md overflow-hidden grid grid-rows-[5fr_2fr_3fr] justify-items-center items-center font-lato"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
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
            <h1 className="xxs:text-lg lg:text-xl 3xl:text-2xl text-slate-800 leading-tight text-center w-10/12">{name}</h1>
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
                            className="flex-1 text-balance text-center text-xs xs:text-sm sm:text-base"
                        >
                            {description}
                        </motion.p>
                    )}
            </AnimatePresence>
        </div>
    )
}