import FoodCard from "@/components/menu/food-card";
import { getMenuByCourse } from "@/lib/crud/menu";

export default async function CoursePageFrame({ course, showUnit }: { course: string, showUnit?: boolean }) {
    const courseList = await getMenuByCourse(course);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-6 2xl:gap-4 w-fit">
            {courseList.map(item => (
                <FoodCard key={item.public_id} menuItem={item} showUnit={showUnit} />
            ))}
        </div>
    )
}