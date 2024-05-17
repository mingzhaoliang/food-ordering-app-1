"use client";

import { useEffect, useState } from "react";

export default function ShowDate({
	date,
	formatter,
}: {
	date: Date;
	formatter: (date: Date) => string;
}) {
	const [formattedDate, setFormattedDate] = useState<string>("");

	useEffect(() => {
		setFormattedDate(formatter(date));
	}, [formatter, date]);

	return formattedDate;
}
