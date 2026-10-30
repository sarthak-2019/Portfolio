"use client";

import { useEffect, useRef, useState } from "react";
import { scrollToSection } from "@/lib/scroll";
import { ArrowUp } from "./icons";

const R = 26;
const CIRCUMFERENCE = 2 * Math.PI * R;

/** Back-to-contents button with a ring that fills as you read. */
export function Fab() {
	const [show, setShow] = useState(false);
	const ring = useRef<SVGCircleElement>(null);

	useEffect(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
			ring.current?.style.setProperty("stroke-dashoffset", String(CIRCUMFERENCE * (1 - progress)));
			setShow(window.scrollY > 600);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<button
			type="button"
			className={`fab${show ? " show" : ""}`}
			aria-label="Back to contents"
			onClick={() => scrollToSection("contents")}
		>
			<svg className="fab-ring" viewBox="0 0 60 60" aria-hidden="true">
				<circle
					ref={ring}
					cx="30"
					cy="30"
					r={R}
					strokeDasharray={CIRCUMFERENCE}
					strokeDashoffset={CIRCUMFERENCE}
				/>
			</svg>
			<ArrowUp className="fab-arrow" />
		</button>
	);
}
