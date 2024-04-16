"use client";

import { getMenuItemsByField } from "@/lib/crud/menu";
import { homeActions } from "@/lib/store/home-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect, useRef } from "react";
import MenuItemPreview from "./menu-item-preview";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CoursePreview() {
    const { activeCourse, previewMenuItems, previewScrollable } = useAppSelector(state => state.home)
    const dispatch = useAppDispatch();
    const previewRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: previewRef,
    });
    const startOpacityIndex = useTransform(scrollXProgress, [0, 0.05, 0.3], [0, 0.8, 1])
    const endOpacityIndex = useTransform(scrollXProgress, [0.7, 0.95, 1], [1, 0.8, 0])

    useEffect(() => {
        async function fetchMenu() {
            const menuItems = await getMenuItemsByField({ course: activeCourse }, 4);
            dispatch(homeActions.setPreviewMenuItems(menuItems));
        }

        fetchMenu();
    }, [activeCourse])

    useEffect(() => {
        function checkScrollable() {
            if (previewRef.current) {
                dispatch(homeActions.setPreviewScrollable(previewRef.current.scrollWidth > previewRef.current.clientWidth));
            }
        }

        checkScrollable();
        window.addEventListener("resize", checkScrollable);

        return () => window.removeEventListener("resize", checkScrollable);

    }, [previewRef])

    return (
        <>
            <div
                className={"relative w-full transition-all"}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 pointer-events-none z-20 ${previewScrollable ? "bg-gradient-to-r from-white from-1% via-transparent via-30%" : "bg-transparent"}`}
                    style={{ opacity: startOpacityIndex, }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute inset-0 pointer-events-none z-20 ${previewScrollable ? "bg-gradient-to-l from-white from-1% via-transparent via-30%" : "bg-transparent"}`}
                    style={{ opacity: endOpacityIndex, }}
                />
                <div
                    ref={previewRef}
                    className={
                        `relative w-full max-w-[80rem] p-4 transition-all 
                        grid grid-cols-[repeat(4,_minmax(10rem,_1fr))] 
                        xs:grid-cols-[repeat(4,_minmax(12rem,_1fr))] 
                        sm:grid-cols-[repeat(4,_minmax(14rem,_1fr))] 
                        md:grid-cols-[repeat(4,_minmax(18rem,_1fr))] 
                        gap-8 items-center 
                        overflow-scroll`
                    }
                >
                    {previewMenuItems.map(item => <MenuItemPreview key={item.public_id} {...item} />)}
                </div>
            </div >
            <p>{previewScrollable.toString()}</p>
        </>
    )
}