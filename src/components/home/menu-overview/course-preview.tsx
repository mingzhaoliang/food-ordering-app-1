"use client";

import { homeActions } from "@/lib/store/home-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect, useRef } from "react";
import CoursePreviewItem from "./course-preview-item";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { globalActions } from "@/lib/store/global-slice";
import { MenuItem } from "@/lib/crud/model-type";

export default function CoursePreview() {
	const { activeCourse, previewMenuItems, previewScrollable } = useAppSelector(
		(state) => state.home
	);
	const dispatch = useAppDispatch();
	const previewRef = useRef<HTMLDivElement>(null);
	const { scrollXProgress } = useScroll({ container: previewRef, axis: "x" });
	const startOpacityIndex = useTransform(scrollXProgress, [0, 0.05, 0.3], [0, 0.8, 1]);
	const endOpacityIndex = useTransform(scrollXProgress, [0.7, 0.95, 1], [1, 0.8, 0]);

	const scrollHandler = () => {
		previewRef.current?.scrollTo({
			left: previewRef.current.scrollWidth,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		previewRef.current?.scrollTo({ left: 0, behavior: "smooth" });
		async function fetchMenu() {
			try {
				const response = await fetch(`/api/restaurant/menu?course=${activeCourse}&limit=4`);
				const menuItems: MenuItem[] = await response.json();
				dispatch(homeActions.setPreviewMenuItems(menuItems));
			} catch (error: any) {
				dispatch(globalActions.setToast({ status: "error", message: error.message }));
			}
		}

		fetchMenu();
	}, [activeCourse, dispatch]);

	useEffect(() => {
		function checkScrollable() {
			if (previewRef.current) {
				dispatch(
					homeActions.setPreviewScrollable(
						previewRef.current.scrollWidth > previewRef.current.clientWidth
					)
				);
			}
		}

		checkScrollable();
		window.addEventListener("resize", checkScrollable);
	}, [previewRef, previewMenuItems, dispatch]);

	return (
		<div className={"relative w-full transition-all flex justify-center"}>
			{previewScrollable && (
				<>
					<motion.div
						className={`absolute inset-0 pointer-events-none z-20 bg-gradient-to-r from-white from-1% via-transparent via-30%`}
						style={{ opacity: startOpacityIndex }}
					/>
					<motion.div
						className={`absolute inset-0 pointer-events-none z-20 bg-gradient-to-l from-white from-1% via-transparent via-30%`}
						style={{ opacity: endOpacityIndex }}
					/>
					<motion.div
						initial={{ x: 10 }}
						animate={{ x: 0 }}
						exit={{ x: 10 }}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="absolute p-2 z-30 top-1/2 left-0 rounded-full bg-teal-600/[.2] shadow-xl"
						style={{
							opacity: startOpacityIndex,
						}}
						onClick={scrollHandler}
					>
						<FaArrowLeft />
					</motion.div>
					<motion.div
						initial={{ x: -10 }}
						animate={{ x: 0 }}
						exit={{ x: -10 }}
						transition={{
							duration: 1.5,
							ease: "easeInOut",
							repeat: Infinity,
							repeatType: "reverse",
						}}
						className="absolute p-2 z-30 top-1/2 right-0 rounded-full bg-teal-600/[.2] shadow-xl"
						style={{
							opacity: endOpacityIndex,
						}}
						onClick={scrollHandler}
					>
						<FaArrowRight />
					</motion.div>
				</>
			)}
			<div
				ref={previewRef}
				className="relative w-fit max-w-[80rem] mx-auto p-4 transition-all gap-8 items-center overflow-scroll"
				style={{
					display: "grid",
					gridTemplateColumns: `repeat(${previewMenuItems.length}, minmax(auto, 20rem))`,
				}}
			>
				{previewMenuItems.map((item) => (
					<CoursePreviewItem key={item.public_id} {...item} />
				))}
			</div>
		</div>
	);
}
