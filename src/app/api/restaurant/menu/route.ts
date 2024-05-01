import { getMenuItems } from "@/lib/crud/read/menu";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const searchParams = req.nextUrl.searchParams;
	const course = searchParams.get("course");
	const limit = searchParams.get("limit") ?? 0;
	if (!course) {
		return NextResponse.json({ error: "Invalid query" }, { status: 400 });
	}

	try {
		const courseList = await getMenuItems({ course }, +limit);
		return NextResponse.json(courseList);
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
