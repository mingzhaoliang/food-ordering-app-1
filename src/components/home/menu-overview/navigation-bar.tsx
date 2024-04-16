"use client";

import ExpandedButton from "@/components/ui/expanded-button";
import { homeActions } from "@/lib/store/home-slice";
import { useAppDispatch } from "@/lib/store/hooks";

export default function NavigationBar() {
    const dispatch = useAppDispatch();

    const clickHandler = (course: "antipasti" | "primi" | "secondi" | "dolci") => {
        dispatch(homeActions.setActiveCourse(course)); // "primi" // "secondi" // "dolci");
    }

    return (
        <div className="grid grid-cols-4 sm:grid-cols-[repeat(4,_7rem)] md:grid-cols-[repeat(4,_8rem)] lg:grid-cols-[repeat(4,_10rem)] max-sm:gap-8 gap-4">
            <ExpandedButton
                id="antipasti"
                src="/icons/green_salad.png"
                onClick={() => clickHandler("antipasti")}
            >
                Antipasti
            </ExpandedButton>
            <ExpandedButton
                id="primi"
                src="/icons/shallow_pan_of_food.png"
                onClick={() => clickHandler("primi")}
            >
                Primi
            </ExpandedButton>
            <ExpandedButton
                id="secondi"
                src="/icons/meat_on_bone.png"
                onClick={() => clickHandler("secondi")}
            >
                Secondi
            </ExpandedButton>
            <ExpandedButton
                id="dolci"
                src="/icons/cookie.png"
                onClick={() => clickHandler("dolci")}
            >
                Dolci
            </ExpandedButton>
        </div>
    )
}