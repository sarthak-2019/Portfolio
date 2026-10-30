export type SectionId = "cover" | "contents" | "intro" | "works" | "method" | "contact";

export const tocEntries: { index: string; title: string; sub: string; target: SectionId }[] = [
	{ index: "01.", title: "Welcome to the Press Kit", sub: "Start Here", target: "intro" },
	{ index: "02.", title: "Selected Works", sub: "Case Studies", target: "works" },
	{ index: "03.", title: "The Psychology of Premium", sub: "My Process", target: "method" },
	{ index: "04.", title: "How I Build Iconic Brands", sub: "Services", target: "method" },
	{ index: "05.", title: "The Shift: Becoming the Brand", sub: "About Me", target: "intro" },
	{ index: "06.", title: "Final Note & Next Steps", sub: "Contact", target: "contact" },
];

export const works: {
	title: string;
	tags: string;
	year: string;
	src: string;
	alt: string;
	width: number;
	height: number;
	square?: boolean;
	stagger?: boolean;
}[] = [
	{
		title: "Noir Skincare",
		tags: "Identity / Packaging / Social",
		year: "2024",
		src: "/img/work-1.jpg",
		alt: "Noir Skincare brand project",
		width: 900,
		height: 1350,
	},
	{
		title: "Vogue Architectural",
		tags: "Editorial / Web Design",
		year: "2023",
		src: "/img/work-2.jpg",
		alt: "Vogue Architectural editorial project",
		width: 900,
		height: 600,
		stagger: true,
	},
	{
		title: "Kult Coffee",
		tags: "Rebranding / Merch",
		year: "2023",
		src: "/img/work-3.jpg",
		alt: "Kult Coffee rebranding project",
		width: 900,
		height: 1350,
		square: true,
	},
];

export const methodSteps: { title: string; body: string }[] = [
	{ title: "01. Audit", body: "Tearing down the existing to find the foundation." },
	{ title: "02. Strategy", body: "Defining the voice that cuts through the noise." },
	{ title: "03. Design", body: "Visuals that are as functional as they are beautiful." },
	{ title: "04. Launch", body: "Deployment across digital and physical touchpoints." },
];

export const collageFigures = Array.from({ length: 14 }, (_, i) => i + 1);

export const email = "hello@maravance.studio";
