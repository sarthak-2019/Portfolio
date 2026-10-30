"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/scroll";
import { ArrowUp } from "./icons";

export function Fab() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 600);
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
			<ArrowUp />
		</button>
	);
}
