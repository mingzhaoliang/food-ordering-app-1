import type { Metadata } from "next";
import { Inter, Lato, Port_Lligat_Sans } from "next/font/google";
import "./globals.css";
// import Header from "@/components/navigation/header";
// import Providers from "@/utils/providers";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "700", "900"],

	variable: "--font-lato",
});

const portLligatSans = Port_Lligat_Sans({
	subsets: ["latin"],
	display: "swap",
	weight: ["400"],
	variable: "--font-portLligatSans",
});

export const metadata: Metadata = {
	title: "Cucina Felice",
	description: "Authentic Italian Food",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`scroll-smooth ${portLligatSans.variable} ${lato.variable}`}>
			<body className={`${inter.className} overscroll-none`}>{children}</body>
		</html>
	);
}
