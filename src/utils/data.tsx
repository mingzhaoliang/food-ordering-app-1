import Link from "next/link";

export const defaultDeliveryFee = 10;
export const freeDeliveryThreshold = 50;
export const orderExpirationTime = 60 * 60; // 1 hour
export const overdueTime = 60 * 30; // 30 minutes

export const restaurantName = "Cucina Felice";
export const restaurantNumber = "(03) 1234 5678";

export const logos: any = {
	default: {
		src: "/icons/box-arrow-in-right.svg",
		alt: "Sign In Logo",
	},
	google: {
		src: "/icons/google-g.svg",
		alt: "Google Logo",
	},
};

export const briefAbout = {
	story: {
		title: "Embark on a Delightful Culinary Journey",
		description:
			"At Cucina Felice, we invite you to embark on a delightful journey through the vibrant flavours of Italy. Our story is one of passion, tradition, and a deep-rooted love for authentic Italian cuisine. From our humble beginnings to becoming a cherished part of the Melbourne community, we&apos;ve remained dedicated to bringing joy to our guests&apos; dining experiences.",
	},
	services: {
		title: "Experience Italian Hospitality, Anywhere You Are!",
		description: (
			<>
				Whether you&apos;re planning a special evening out or craving Italian comfort at
				home, Cucina Felice offers both{" "}
				<Link href="/#reservation" className="font-bold underline">
					reservations
				</Link>{" "}
				and{" "}
				<Link href="/menu/antipasti" className="font-bold underline">
					online delivery
				</Link>{" "}
				services. Our commitment to exceptional service extends beyond our restaurant doors,
				ensuring that you can enjoy the taste of Italy wherever you are.
			</>
		),
	},
};

export const openingHours = [
	{ day: "Sunday & Monday", hours: ["closed"] },
	{ day: "Tuesday - Thursday", hours: ["12:00 pm - 2:30 pm", "6:00 pm - 9:00 pm"] },
	{ day: "Friday & Saturday", hours: ["12:00 pm - 2:30 pm", "5:30 pm - 10:00 pm"] },
];

const shortReservationTimes: { [key: number]: string } = {
	0: "12:00 pm",
	1: "12:30 pm",
	2: "1:00 pm",
	3: "1:30 pm",
	4: "2:00 pm",
	10: "6:00 pm",
	11: "6:30 pm",
	12: "7:00 pm",
	13: "7:30 pm",
	14: "8:00 pm",
};

const longReservationTimes: { [key: number]: string } = {
	0: "12:00 pm",
	1: "12:30 pm",
	2: "1:00 pm",
	3: "1:30 pm",
	4: "2:00 pm",
	10: "5:30 pm",
	11: "6:00 pm",
	12: "6:30 pm",
	13: "7:00 pm",
	14: "7:30 pm",
	15: "8:00 pm",
	16: "8:30 pm",
	17: "9:00 pm",
};

// Due to system timezone, the reservation times are in UTC, in which case getDay() will return the day of the week in UTC
export const availableReservationTimes: { [key: number]: { [key: number]: string } } = {
	1: shortReservationTimes,
	2: shortReservationTimes,
	3: shortReservationTimes,
	4: longReservationTimes,
	5: longReservationTimes,
};

export const availableTableNumber = {
	smallTable: 4,
	largeTable: 2,
};
