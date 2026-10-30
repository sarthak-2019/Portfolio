"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { SectionId } from "@/lib/content";

type PageProps = {
	id: SectionId;
	className: string;
	/** Reveal on mount instead of waiting to scroll into view. */
	eager?: boolean;
	children: ReactNode;
};

export function Page({ id, className, eager = false, children }: PageProps) {
	const ref = useRef<HTMLElement>(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (eager || !("IntersectionObserver" in window)) {
			setInView(true);
			return;
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					io.disconnect();
				}
			},
			{ threshold: 0.12 },
		);
		io.observe(el);
		return () => io.disconnect();
	}, [eager]);

	return (
		<section ref={ref} id={id} className={`page ${className}${inView ? " in-view" : ""}`}>
			{children}
		</section>
	);
}
