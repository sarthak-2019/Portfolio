import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Single place where plugins are registered; import GSAP from here, not "gsap".
if (typeof window !== "undefined") {
	gsap.registerPlugin(
		useGSAP,
		ScrollTrigger,
		ScrollSmoother,
		SplitText,
		DrawSVGPlugin,
		ScrambleTextPlugin,
	);
}

export { gsap, ScrollSmoother, ScrollTrigger, SplitText, useGSAP };

export const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
