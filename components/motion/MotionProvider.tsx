"use client";

import type { ReactNode } from "react";
import { creator } from "@/lib/content";
import { gsap, ScrollSmoother, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { createCoverIntro, playLoader } from "@/lib/motion/intro";
import { initPointer } from "@/lib/motion/pointer";
import { initScrollAnimations } from "@/lib/motion/scroll";

/**
 * Owns the ScrollSmoother wrapper, the loader and every scroll/pointer animation.
 * Everything runs only with prefers-reduced-motion: no-preference; pointer
 * effects only on fine-pointer devices.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
	useGSAP(() => {
		const mm = gsap.matchMedia();

		mm.add(
			{
				motion: "(prefers-reduced-motion: no-preference)",
				fine: "(hover: hover) and (pointer: fine)",
			},
			(ctx) => {
				const { motion, fine } = ctx.conditions as { motion: boolean; fine: boolean };
				if (!motion) return;

				history.scrollRestoration = "manual";
				window.scrollTo(0, 0);

				const smoother = ScrollSmoother.create({
					wrapper: "#smooth-wrapper",
					content: "#smooth-content",
					smooth: 1.15,
					effects: true,
					smoothTouch: 0.1,
				});
				smoother.paused(true);

				let alive = true;
				let intro: gsap.core.Timeline | undefined;
				const cleanups: (() => void)[] = [];

				// Splits need final font metrics; this resolves well inside the loader.
				document.fonts.ready.then(() => {
					if (!alive) return;
					ctx.add(() => {
						intro = createCoverIntro();
						initScrollAnimations();
						if (fine) cleanups.push(initPointer());
						ScrollTrigger.refresh();
					});
				});

				playLoader(() => {
					smoother.paused(false);
					intro?.play();
				});

				return () => {
					alive = false;
					for (const fn of cleanups) fn();
				};
			},
		);

		return () => mm.revert();
	});

	return (
		<>
			<div className="loader" aria-hidden="true">
				<div className="loader-inner">
					<span className="loader-word">
						{creator.name} — UGC Media Kit
					</span>
					<span className="loader-count">000</span>
					<span className="loader-bar" />
				</div>
			</div>

			<div id="smooth-wrapper">
				<div id="smooth-content">{children}</div>
			</div>
		</>
	);
}
