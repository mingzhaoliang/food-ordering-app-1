import { LazyMotion, MotionValue, domAnimation, m, useScroll, useTransform } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CoursePreviewMask({
	startOpacityIndex,
	endOpacityIndex,
	scrollHandler,
}: {
	startOpacityIndex: MotionValue<number>;
	endOpacityIndex: MotionValue<number>;
	scrollHandler: () => void;
}) {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				className={`absolute inset-0 pointer-events-none z-20 bg-gradient-to-r from-white from-1% via-transparent via-30%`}
				style={{ opacity: startOpacityIndex }}
			/>
			<m.div
				className={`absolute inset-0 pointer-events-none z-20 bg-gradient-to-l from-white from-1% via-transparent via-30%`}
				style={{ opacity: endOpacityIndex }}
			/>
			<m.div
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
			</m.div>
			<m.div
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
			</m.div>
		</LazyMotion>
	);
}
