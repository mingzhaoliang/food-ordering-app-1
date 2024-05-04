import FoodCard from "@/components/menu/food-card";
import { getMenuItems } from "@/lib/crud/read/menu";

export async function generateStaticParams() {
	return [
		{ course: "antipasti" },
		{ course: "primi" },
		{ course: "secondi" },
		{ course: "dolci" },
	];
}

export default async function CoursePage({ params }: { params: { course: string } }) {
	const courseList = await getMenuItems({ course: params.course });

	return (
		<div className="w-fit grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-3 md:gap-4 lg:gap-3 xl:gap-6 2xl:gap-5">
			{courseList.map((item) => (
				<FoodCard key={item.public_id} menuItem={item} />
			))}
		</div>
	);
}
