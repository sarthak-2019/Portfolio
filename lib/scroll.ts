import type { SectionId } from "./content";
import { ScrollSmoother } from "./gsap";

export function scrollToSection(id: SectionId) {
	const el = document.getElementById(id);
	if (!el) return;
	const smoother = ScrollSmoother.get();
	if (smoother) smoother.scrollTo(el, true, "top 24px");
	else el.scrollIntoView({ behavior: "smooth", block: "start" });
}
