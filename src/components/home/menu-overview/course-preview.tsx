"use client";

import { homeActions } from "@/lib/store/home-slice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { useEffect, useRef } from "react";
import CoursePreviewItem from "./course-preview-item";
import { useScroll, useTransform } from "framer-motion";
import { globalActions } from "@/lib/store/global-slice";
import { DBMenuItem } from "@/types/menu";
import dynamic from "next/dynamic";

const CoursePreviewMask = dynamic(() => import("./course-preview-mask"));

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
				const menuItems: DBMenuItem[] = await response.json();
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
				<CoursePreviewMask
					startOpacityIndex={startOpacityIndex}
					endOpacityIndex={endOpacityIndex}
					scrollHandler={scrollHandler}
				/>
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
