// All copy, brands, testimonials and links below are placeholders —
// swap in your own details. Sections read everything from this file.

export type SectionId =
	| "cover"
	| "contents"
	| "intro"
	| "works"
	| "clients"
	| "testimonials"
	| "process"
	| "contact";

export const creator = {
	name: "Mara Vance",
	firstName: "Mara",
	role: "UGC Creator",
	handle: "@mara.ugc",
	email: "hello@maravance.studio",
	instagram: "https://instagram.com/",
	tiktok: "https://tiktok.com/",
	location: "Based in Lisbon",
	year: "2026",
	booking: "Currently booking projects for Q1 2027.",
};

export const stats: { value: string; label: string }[] = [
	{ value: "200+", label: "Videos shipped" },
	{ value: "100+", label: "DTC brands" },
	{ value: "48h", label: "Turnaround" },
];

export const tocEntries: { index: string; title: string; sub: string; target: SectionId }[] = [
	{ index: "01.", title: "Welcome to the Media Kit", sub: "Start Here", target: "intro" },
	{ index: "02.", title: "Content That Stops the Scroll", sub: "Sample Work", target: "works" },
	{ index: "03.", title: "Trusted by Brands", sub: "Clients", target: "clients" },
	{ index: "04.", title: "What Clients Say", sub: "Testimonials", target: "testimonials" },
	{ index: "05.", title: "From Brief to Ad", sub: "The Process", target: "process" },
	{ index: "06.", title: "Let's Work Together", sub: "Contact", target: "contact" },
];

export type Reel = {
	brand: string;
	niche: string;
	format: string;
	duration: string;
	poster: string;
	posterWidth: number;
	posterHeight: number;
	/** Path to an mp4 in /public, e.g. "/videos/lumen.mp4". Omit to show the poster only. */
	video?: string;
};

export const reels: Reel[] = [
	{
		brand: "Lumen Skin",
		niche: "Skincare",
		format: "Testimonial",
		duration: "0:34",
		poster: "/img/work-1.jpg",
		posterWidth: 900,
		posterHeight: 1350,
	},
	{
		brand: "Northbound",
		niche: "Finance",
		format: "Problem / Fix",
		duration: "0:28",
		poster: "/img/fig-3.jpg",
		posterWidth: 320,
		posterHeight: 480,
	},
	{
		brand: "Pulse Fit",
		niche: "Health & Wellness",
		format: "Unboxing",
		duration: "0:41",
		poster: "/img/work-3.jpg",
		posterWidth: 900,
		posterHeight: 1350,
	},
	{
		brand: "Lingo Lab",
		niche: "EdTech",
		format: "Talking Head",
		duration: "0:22",
		poster: "/img/fig-9.jpg",
		posterWidth: 320,
		posterHeight: 480,
	},
	{
		brand: "Atelier Nine",
		niche: "Fashion",
		format: "Try-On Haul",
		duration: "0:37",
		poster: "/img/fig-2.jpg",
		posterWidth: 320,
		posterHeight: 480,
	},
];

/** `image` is the still that floats beside the cursor when the row is hovered. */
export const clients: { brand: string; niche: string; videos: number; image: string }[] = [
	{ brand: "Lumen Skin", niche: "Beauty & Skincare", videos: 4, image: "/img/work-1.jpg" },
	{ brand: "Northbound", niche: "Finance", videos: 3, image: "/img/fig-3.jpg" },
	{ brand: "Pulse Fit", niche: "Health & Wellness", videos: 3, image: "/img/work-3.jpg" },
	{ brand: "Lingo Lab", niche: "EdTech", videos: 3, image: "/img/fig-9.jpg" },
	{ brand: "Atelier Nine", niche: "Fashion", videos: 2, image: "/img/fig-2.jpg" },
	{ brand: "Orbit", niche: "Apps & Tech", videos: 3, image: "/img/fig-7.jpg" },
	{ brand: "Kult Coffee", niche: "Food & Drink", videos: 2, image: "/img/fig-11.jpg" },
];

export const brands = [
	"Lumen Skin",
	"Northbound",
	"Pulse Fit",
	"Lingo Lab",
	"Atelier Nine",
	"Orbit",
	"Kult Coffee",
	"Maison Rue",
	"Haven Home",
	"Vela Travel",
];

export const testimonials: { quote: string; who: string; detail: string }[] = [
	{
		quote:
			"Her energy came through so naturally on camera. The video felt authentic, not scripted — and it beat our control ad in the first week.",
		who: "Growth Lead",
		detail: "Skincare brand · Italy",
	},
	{
		quote:
			"She researched our customers before writing a single line. Sharp hooks, and a delivery that made a complicated product feel simple.",
		who: "Repeat client",
		detail: "Finance app · United States",
	},
	{
		quote:
			"Fast, detailed and easy to work with. Final cuts in two days, plus extra hooks to test. We've already booked the next batch.",
		who: "Repeat client",
		detail: "DTC brand · France",
	},
];

export const processSteps: { title: string; body: string }[] = [
	{ title: "01. Brief", body: "A full brief or a rough idea — we turn it into a plan together." },
	{ title: "02. Strategy & Script", body: "I dig into your market and why people buy, then script around it." },
	{ title: "03. Recording", body: "Native, natural delivery in the formats your audience already scrolls." },
	{ title: "04. Edit", body: "Cut to hold attention to the last second. Captioned and ad-account ready." },
	{ title: "05. Delivery", body: "Final cuts in 48 hours, revisions included, plus extra hooks to test." },
];

export const collageFigures = Array.from({ length: 14 }, (_, i) => i + 1);
