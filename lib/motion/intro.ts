import { gsap, SCRAMBLE_CHARS, SplitText } from "@/lib/gsap";

/** Counter + bar loader; calls onWipe as the curtain starts lifting. */
export function playLoader(onWipe: () => void) {
	const count = document.querySelector<HTMLElement>(".loader-count");
	const counter = { v: 0 };

	return gsap
		.timeline()
		.from(".loader-word", { yPercent: 120, opacity: 0, duration: 0.7, ease: "expo.out" })
		.to(
			counter,
			{
				v: 100,
				duration: 1.4,
				ease: "power2.inOut",
				onUpdate: () => {
					if (count) count.textContent = String(Math.round(counter.v)).padStart(3, "0");
				},
			},
			0,
		)
		.to(".loader-bar", { scaleX: 1, duration: 1.4, ease: "power2.inOut" }, 0)
		.to(".loader-inner", { yPercent: -40, opacity: 0, duration: 0.45, ease: "power3.in" })
		.addLabel("wipe")
		.call(onWipe, undefined, "wipe")
		.to(".loader", { clipPath: "inset(0% 0% 100% 0%)", duration: 1.1, ease: "expo.inOut" }, "wipe")
		.set(".loader", { display: "none" });
}

/** Cover entrance. Built paused (so its start state hides under the loader), played on wipe. */
export function createCoverIntro() {
	const tl = gsap.timeline({ paused: true, delay: 0.25 });

	const wordmark = document.querySelector<HTMLElement>(".wordmark");
	if (wordmark) {
		const split = SplitText.create(wordmark, { type: "words,chars" });
		tl.from(
			split.chars,
			{
				yPercent: 130,
				rotationX: -90,
				opacity: 0,
				transformOrigin: "50% 100%",
				transformPerspective: 800,
				stagger: 0.04,
				duration: 1.2,
				ease: "expo.out",
			},
			0,
		);
	}

	const kicker = document.querySelector<HTMLElement>(".cover .kicker");
	if (kicker?.dataset.text) {
		tl.fromTo(
			kicker,
			{ opacity: 0 },
			{
				opacity: 0.72,
				duration: 1.4,
				scrambleText: { text: kicker.dataset.text, chars: SCRAMBLE_CHARS, speed: 0.5 },
			},
			0.1,
		);
	}

	return tl
		.from(".cover .rule", { scaleX: 0, duration: 1.2, ease: "expo.inOut" }, 0.2)
		.from(".cover .tagline", { y: 24, opacity: 0, duration: 0.9, ease: "expo.out" }, 0.55)
		.from(
			".fig-inner",
			{
				yPercent: 115,
				rotation: () => gsap.utils.random(-16, 16),
				duration: 1.3,
				ease: "expo.out",
				stagger: { each: 0.035, from: "center" },
			},
			0.3,
		)
		.from(".cover-foot > *", { y: 20, opacity: 0, stagger: 0.1, duration: 0.8, ease: "expo.out" }, 0.9);
}
