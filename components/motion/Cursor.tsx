"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const HOVERABLE = "a, button, [data-magnetic], .toc-row, .client-row";

/**
 * Blend-mode ring + dot cursor. Grows over interactive elements and shows a
 * label over anything with data-cursor="Label". Fine pointers only.
 */
export function Cursor() {
	const root = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const mm = gsap.matchMedia();

		mm.add("(hover: hover) and (pointer: fine)", () => {
			const el = root.current;
			const ring = el?.querySelector<HTMLElement>(".cursor-ring");
			const dot = el?.querySelector<HTMLElement>(".cursor-dot");
			const label = el?.querySelector<HTMLElement>(".cursor-label");
			if (!el || !ring || !dot || !label) return;

			document.documentElement.classList.add("has-cursor");
			gsap.set([ring, dot], { xPercent: -50, yPercent: -50 });

			const ringX = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3" });
			const ringY = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3" });
			const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
			const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });

			const move = (e: MouseEvent) => {
				ringX(e.clientX);
				ringY(e.clientY);
				dotX(e.clientX);
				dotY(e.clientY);
				el.classList.add("is-visible");
			};

			const over = (e: MouseEvent) => {
				const target = e.target as Element;
				const labelled = target.closest<HTMLElement>("[data-cursor]");
				if (labelled?.dataset.cursor) label.textContent = labelled.dataset.cursor;
				el.classList.toggle("is-label", !!labelled);
				el.classList.toggle("is-hover", !labelled && !!target.closest(HOVERABLE));
				el.classList.toggle("is-text", !!target.closest("input, textarea"));
			};

			const hide = () => el.classList.remove("is-visible");
			const press = () => gsap.to(ring, { scale: 0.75, duration: 0.15, ease: "power2.out" });
			const release = () => gsap.to(ring, { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.4)" });

			window.addEventListener("mousemove", move, { passive: true });
			document.addEventListener("mouseover", over);
			document.documentElement.addEventListener("mouseleave", hide);
			window.addEventListener("mousedown", press);
			window.addEventListener("mouseup", release);

			return () => {
				window.removeEventListener("mousemove", move);
				document.removeEventListener("mouseover", over);
				document.documentElement.removeEventListener("mouseleave", hide);
				window.removeEventListener("mousedown", press);
				window.removeEventListener("mouseup", release);
				document.documentElement.classList.remove("has-cursor");
			};
		});

		return () => mm.revert();
	});

	return (
		<div className="cursor" ref={root} aria-hidden="true">
			<div className="cursor-ring">
				<span className="cursor-label" />
			</div>
			<div className="cursor-dot" />
		</div>
	);
}
