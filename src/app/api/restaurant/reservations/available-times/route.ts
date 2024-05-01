import { getAvailableTimes } from "@/lib/crud/read/reservations";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams;
		const queryDate = searchParams.get("date");

		if (!queryDate) {
			return NextResponse.json({ message: "Please provide a date." }, { status: 400 });
		}

		const availableTimes = await getAvailableTimes(new Date(queryDate));

		return NextResponse.json(availableTimes, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ message: error.message }, { status: 500 });
	}
}
