import type { Metadata } from "next";
import localFont from "next/font/local";
import { creator } from "@/lib/content";
import "./globals.css";

const inter = localFont({
	src: "./fonts/inter-var.woff2",
	weight: "100 900",
	style: "normal",
	variable: "--font-inter",
	display: "swap",
});

const robotoMono = localFont({
	src: "./fonts/robotomono-var.woff2",
	weight: "100 700",
	style: "normal",
	variable: "--font-roboto-mono",
	display: "swap",
});

const playfair = localFont({
	src: "./fonts/playfair-italic.woff2",
	weight: "400",
	style: "italic",
	variable: "--font-playfair",
	display: "swap",
});

export const metadata: Metadata = {
	title: `${creator.name} — UGC that converts`,
	description: `Strategy-led UGC and direct-response video ads by ${creator.name}. Sample work, clients, process and booking.`,
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${robotoMono.variable} ${playfair.variable}`}
		>
			<body>
				<noscript>
					<style>{".loader { display: none; }"}</style>
				</noscript>
				{children}
			</body>
		</html>
	);
}
