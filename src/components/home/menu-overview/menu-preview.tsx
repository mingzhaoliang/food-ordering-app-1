import CoursePreview from "./course-preview";
import NavigationBar from "./navigation-bar";
import { getMenuItems } from "@/lib/crud/read/menu";

const courses = ["antipasti", "primi", "secondi", "dolci"];

export default async function MenuOverview() {
	const data = await Promise.all(courses.map((course) => getMenuItems({ course }, 4)));
	const previewMenuItems = Object.fromEntries(
		courses.map((course, index) => [course, data[index]])
	);

	return (
		<div
			id="menu-preview"
			className="px-2 xs:px-6 sm:px-10 md:px-20 mt-10 sm:mt-10 md:mt-14 lg:mt-20 flex flex-col gap-2 xs:gap-4 sm:gap-8 lg:gap-16 justify-center items-center"
		>
			<div className="flex flex-col items-center gap-3 lg:gap-6">
				<h1 className="p-2 xs:p-4 text-3xl xs:text-4xl md:text-5xl xl:text-6xl font-cursive text-pretty flex flex-wrap gap-4 justify-center items-center transition-all duration-300">
					<span className="text-nowrap">Welcome to Cucina Felice</span>
					<span className="text-nowrap">- A Taste of Italy!</span>
				</h1>
				<p className="p-2 xs:p-4 font-lato max-w-[40rem] text-center">
					Dive into an authentic culinary journey with our diverse selection of
					traditional Italian courses, from enticing antipasti to indulgent dolci.
				</p>
			</div>
			<NavigationBar />
			<CoursePreview previewMenuItems={previewMenuItems} />
		</div>
	);
}
