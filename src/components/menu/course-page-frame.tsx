import FoodCard from "@/components/menu/food-card";
import { getMenuItemsByField } from "@/lib/crud/menu";

export default async function CoursePageFrame({ course }: { course: string }) {
    const courseList = await getMenuItemsByField({ course });

    return (
        <div className="w-fit grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-3 md:gap-4 lg:gap-3 xl:gap-6 2xl:gap-5">
            {courseList.map(item => (
                <FoodCard key={item.public_id} menuItem={item} />
            ))}
        </div>
    )
}