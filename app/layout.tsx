import type { Metadata } from "next";
import localFont from "next/font/local";
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
	title: "Crimson Press Kit — Mara Vance",
	description:
		"The Crimson Press Kit — an editorial, spiral-bound portfolio by brand designer Mara Vance.",
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
					<style>{".page { opacity: 1; transform: none; }"}</style>
				</noscript>
				{children}
			</body>
		</html>
	);
}
