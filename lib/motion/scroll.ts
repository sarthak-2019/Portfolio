import { gsap, SCRAMBLE_CHARS, ScrollTrigger, SplitText } from "@/lib/gsap";

const q = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel);

/** Every scroll-driven animation. Must run inside a gsap context. */
export function initScrollAnimations() {
	pages();
	headings();
	scrambles();
	intro();
	marquee();
	contents();
	reels();
	clients();
	testimonials();
	process();
	contact();
}

/** Binder pages swing up into place on entry and tilt away as they leave. */
function pages() {
	for (const page of q(".page")) {
		if (!page.classList.contains("cover")) {
			gsap.fromTo(
				page,
				{ rotationX: 10, scale: 0.92, y: 90, transformOrigin: "50% 0%", transformPerspective: 1800 },
				{
					rotationX: 0,
					scale: 1,
					y: 0,
					ease: "none",
					scrollTrigger: { trigger: page, start: "top bottom", end: "top 55%", scrub: true },
				},
			);
		}

		gsap.fromTo(
			page,
			{ rotationX: 0, scale: 1 },
			{
				rotationX: -7,
				scale: 0.95,
				transformOrigin: "50% 100%",
				transformPerspective: 1800,
				ease: "none",
				immediateRender: false,
				scrollTrigger: { trigger: page, start: "bottom bottom", end: "bottom top", scrub: true },
			},
		);
	}
}

/** data-split="chars" | "words" | "lines" — masked-feel 3D text reveals. */
function headings() {
	for (const el of q("[data-split]")) {
		const mode = el.dataset.split as "chars" | "words" | "lines";
		const lines = mode === "lines";

		SplitText.create(el, {
			type: mode === "chars" ? "words,chars" : mode,
			autoSplit: true,
			onSplit(self) {
				return gsap.from(self[mode], {
					yPercent: lines ? 60 : 115,
					rotationX: lines ? 0 : -85,
					opacity: 0,
					transformOrigin: "50% 100%",
					transformPerspective: 700,
					stagger: mode === "chars" ? 0.028 : mode === "words" ? 0.05 : 0.1,
					duration: lines ? 0.9 : 1.15,
					ease: "expo.out",
					scrollTrigger: { trigger: el, start: "top 88%" },
				});
			},
		});
	}
}

/** Mono labels decode themselves as they scroll in. */
function scrambles() {
	for (const el of q("[data-scramble]")) {
		gsap.to(el, {
			duration: 1.2,
			scrambleText: { text: el.textContent ?? "", chars: SCRAMBLE_CHARS, speed: 0.5 },
			scrollTrigger: { trigger: el, start: "top 92%" },
		});
	}
}

function intro() {
	gsap.from(".squiggle path", {
		drawSVG: "0%",
		duration: 1.4,
		ease: "power2.inOut",
		scrollTrigger: { trigger: ".intro h2", start: "top 65%" },
	});

	gsap.from(".intro-stats", {
		clipPath: "inset(0% 100% 0% 0%)",
		duration: 1.4,
		ease: "expo.inOut",
		scrollTrigger: { trigger: ".intro-stats", start: "top 90%" },
	});

	for (const dd of q(".stat dd")) {
		const match = dd.dataset.count?.match(/^(\d+)(.*)$/);
		if (!match) continue;
		const [, value, suffix] = match;
		const counter = { v: 0 };
		dd.textContent = `0${suffix}`;
		gsap.to(counter, {
			v: Number(value),
			duration: 2.2,
			ease: "power3.out",
			onUpdate: () => {
				dd.textContent = `${Math.round(counter.v)}${suffix}`;
			},
			scrollTrigger: { trigger: dd, start: "top 92%" },
		});
	}
}

/** Endless brand strip that speeds up, reverses and skews with scroll velocity. */
function marquee() {
	const track = document.querySelector<HTMLElement>(".marquee-track");
	if (!track) return;

	const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
	loop.totalTime(loop.duration() * 100); // headroom so reversing never hits t=0

	const skew = gsap.quickTo(track, "skewX", { duration: 0.4, ease: "power3" });
	let direction = 1;
	const settle = gsap.delayedCall(0.15, () => {
		gsap.to(loop, { timeScale: direction, duration: 1.2, ease: "power2.out", overwrite: true });
		skew(0);
	});

	ScrollTrigger.create({
		trigger: ".brands",
		start: "top bottom",
		end: "bottom top",
		onUpdate(self) {
			direction = self.direction;
			const velocity = self.getVelocity();
			const boost = 1 + Math.min(Math.abs(velocity) / 250, 8);
			gsap.to(loop, { timeScale: direction * boost, duration: 0.25, overwrite: true });
			skew(gsap.utils.clamp(-12, 12, velocity / -120));
			settle.restart(true);
		},
	});
}

function contents() {
	const trigger = { trigger: ".contents-portrait", start: "top 85%" };
	gsap.from(".contents-portrait", {
		clipPath: "inset(100% 0% 0% 0%)",
		duration: 1.5,
		ease: "expo.inOut",
		scrollTrigger: trigger,
	});
	gsap.from(".contents-portrait img", { scale: 1.5, duration: 2, ease: "expo.out", scrollTrigger: trigger });
	gsap.from(".name-tag", { x: -40, opacity: 0, duration: 0.9, delay: 0.9, ease: "expo.out", scrollTrigger: trigger });
	gsap.from(".toc-row", {
		x: 80,
		opacity: 0,
		stagger: 0.08,
		duration: 1,
		ease: "expo.out",
		scrollTrigger: { trigger: ".toc", start: "top 85%" },
	});
}

/** Reels wipe up out of their frames, then drift with inner parallax. */
function reels() {
	const cards = q(".reels-grid > .work");
	const parts = (card: HTMLElement) => ({
		frame: card.querySelector<HTMLElement>(".work-media") ?? card,
		img: card.querySelector<HTMLElement>(".work-media img"),
		foot: card.querySelector<HTMLElement>(".work-foot"),
	});

	for (const card of cards) {
		const { frame, img, foot } = parts(card);
		gsap.set(frame, { clipPath: "inset(100% 0% 0% 0%)" });
		if (foot) gsap.set(foot, { opacity: 0, y: 24 });
		if (img) {
			gsap.set(img, { scale: 1.2 });
			gsap.fromTo(
				img,
				{ yPercent: -7 },
				{
					yPercent: 7,
					ease: "none",
					scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
				},
			);
		}
	}

	ScrollTrigger.batch(cards, {
		start: "top 88%",
		once: true,
		onEnter: (batch) => {
			const items = (batch as HTMLElement[]).map(parts);
			gsap.to(
				items.map((p) => p.frame),
				{ clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", stagger: 0.14 },
			);
			gsap.fromTo(
				items.flatMap((p) => (p.img ? [p.img] : [])),
				{ scale: 1.7 },
				{ scale: 1.2, duration: 2, ease: "expo.out", stagger: 0.14 },
			);
			gsap.to(
				items.flatMap((p) => (p.foot ? [p.foot] : [])),
				{ opacity: 1, y: 0, duration: 1, ease: "expo.out", stagger: 0.14, delay: 0.5 },
			);
		},
	});

	gsap.to(".glow-orb", {
		scale: 1.35,
		opacity: 0.95,
		duration: 3.2,
		ease: "sine.inOut",
		repeat: -1,
		yoyo: true,
	});
}

function clients() {
	gsap.from(".client-row", {
		y: 70,
		opacity: 0,
		stagger: 0.07,
		duration: 1.1,
		ease: "expo.out",
		scrollTrigger: { trigger: ".client-list", start: "top 85%" },
	});
}

function testimonials() {
	gsap.from(".quote", {
		y: 140,
		opacity: 0,
		rotation: (i) => [-6, 4, -3][i % 3],
		stagger: 0.15,
		duration: 1.3,
		ease: "expo.out",
		scrollTrigger: { trigger: ".quotes", start: "top 85%" },
	});

	gsap.from(".quote-stars span", {
		scale: 0,
		rotation: -140,
		stagger: 0.045,
		duration: 0.7,
		delay: 0.5,
		ease: "back.out(3)",
		scrollTrigger: { trigger: ".quotes", start: "top 85%" },
	});

	// Quotes "light up" word by word as you read down the page.
	for (const quote of q(".quote blockquote")) {
		SplitText.create(quote, {
			type: "words",
			autoSplit: true,
			onSplit: (self) =>
				gsap.fromTo(
					self.words,
					{ opacity: 0.12 },
					{
						opacity: 1,
						stagger: 0.05,
						ease: "none",
						scrollTrigger: { trigger: quote, start: "top 85%", end: "bottom 50%", scrub: true },
					},
				),
		});
	}
}

function process() {
	gsap.from(".method-progress", {
		scaleY: 0,
		ease: "none",
		scrollTrigger: { trigger: ".method", start: "top 70%", end: "bottom 75%", scrub: true },
	});

	gsap.from(".method-card", {
		x: 160,
		rotation: 5,
		opacity: 0,
		stagger: 0.1,
		duration: 1.2,
		ease: "expo.out",
		clearProps: "transform,opacity",
		scrollTrigger: { trigger: ".method-steps", start: "top 85%" },
	});
}

function contact() {
	gsap.from(".contact-portrait", {
		y: -140,
		rotation: -24,
		opacity: 0,
		duration: 1.6,
		ease: "elastic.out(1, 0.55)",
		scrollTrigger: { trigger: ".contact", start: "top 75%" },
	});

	gsap.from(".contact-btns > *", {
		y: 40,
		opacity: 0,
		stagger: 0.1,
		duration: 1,
		ease: "expo.out",
		scrollTrigger: { trigger: ".contact-btns", start: "top 95%" },
	});

	gsap.from(".query, .socials > a, .copyright", {
		x: 50,
		opacity: 0,
		stagger: 0.08,
		duration: 1,
		ease: "expo.out",
		scrollTrigger: { trigger: ".contact-right", start: "top 85%" },
	});
}
