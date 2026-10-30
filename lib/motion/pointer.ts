import { gsap, SCRAMBLE_CHARS } from "@/lib/gsap";

type Cleanup = () => void;

/** Pointer-driven micro-interactions. Must run inside a gsap context. */
export function initPointer(): Cleanup {
	const cleanups: Cleanup[] = [];
	const listen = <E extends Event = MouseEvent>(
		target: EventTarget,
		type: string,
		fn: (e: E) => void,
	) => {
		const handler = fn as EventListener;
		target.addEventListener(type, handler);
		cleanups.push(() => target.removeEventListener(type, handler));
	};

	magnetic(listen);
	tilt(listen);
	clientPreview(listen);
	orbs(listen);
	hoverScramble(listen);
	portrait(listen);

	return () => {
		for (const fn of cleanups) fn();
	};
}

type Listen = <E extends Event = MouseEvent>(
	target: EventTarget,
	type: string,
	fn: (e: E) => void,
) => void;

/** [data-magnetic="0.35"] — element leans toward the cursor. */
function magnetic(listen: Listen) {
	for (const el of gsap.utils.toArray<HTMLElement>("[data-magnetic]")) {
		const strength = Number(el.dataset.magnetic) || 0.35;
		const xTo = gsap.quickTo(el, "x", { duration: 0.7, ease: "power3" });
		const yTo = gsap.quickTo(el, "y", { duration: 0.7, ease: "power3" });

		listen(el, "mousemove", (e: MouseEvent) => {
			const r = el.getBoundingClientRect();
			xTo((e.clientX - (r.left + r.width / 2)) * strength);
			yTo((e.clientY - (r.top + r.height / 2)) * strength);
		});
		listen(el, "mouseleave", () => {
			xTo(0);
			yTo(0);
		});
	}
}

/** 3D tilt + moving glare on reel cards. */
function tilt(listen: Listen) {
	for (const card of gsap.utils.toArray<HTMLElement>(".reels-grid > .work")) {
		const frame = card.querySelector<HTMLElement>(".work-media");
		if (!frame) continue;
		gsap.set(frame, { transformPerspective: 900 });
		const rx = gsap.quickTo(frame, "rotationX", { duration: 0.6, ease: "power3" });
		const ry = gsap.quickTo(frame, "rotationY", { duration: 0.6, ease: "power3" });

		listen(card, "mousemove", (e: MouseEvent) => {
			const r = frame.getBoundingClientRect();
			const px = (e.clientX - r.left) / r.width;
			const py = (e.clientY - r.top) / r.height;
			ry((px - 0.5) * 18);
			rx((0.5 - py) * 18);
			frame.style.setProperty("--mx", `${px * 100}%`);
			frame.style.setProperty("--my", `${py * 100}%`);
		});
		listen(card, "mouseleave", () => {
			rx(0);
			ry(0);
		});
	}
}

/** Floating image that trails the cursor over the client list, swinging with speed. */
function clientPreview(listen: Listen) {
	const page = document.querySelector<HTMLElement>(".clients");
	const list = page?.querySelector<HTMLElement>(".client-list");
	const preview = page?.querySelector<HTMLElement>(".client-preview");
	if (!page || !list || !preview) return;

	const images = gsap.utils.toArray<HTMLElement>(".client-preview img");
	gsap.set(preview, { xPercent: -50, yPercent: -50, scale: 0.5, autoAlpha: 0 });

	const xTo = gsap.quickTo(preview, "x", { duration: 0.6, ease: "power3" });
	const yTo = gsap.quickTo(preview, "y", { duration: 0.6, ease: "power3" });
	const rotTo = gsap.quickTo(preview, "rotation", { duration: 0.9, ease: "power3" });
	const settle = gsap.delayedCall(0.12, () => rotTo(0)).pause();
	let lastX = 0;

	const local = (e: MouseEvent) => {
		const r = page.getBoundingClientRect();
		return { x: e.clientX - r.left, y: e.clientY - r.top };
	};

	listen(list, "mouseenter", (e: MouseEvent) => {
		const { x, y } = local(e);
		xTo(x, x);
		yTo(y, y);
		lastX = e.clientX;
		gsap.to(preview, { autoAlpha: 1, scale: 1, duration: 0.5, ease: "expo.out", overwrite: "auto" });
	});
	listen(list, "mousemove", (e: MouseEvent) => {
		const { x, y } = local(e);
		xTo(x);
		yTo(y);
		rotTo(gsap.utils.clamp(-16, 16, (e.clientX - lastX) * 0.9));
		lastX = e.clientX;
		settle.restart(true);
	});
	listen(list, "mouseleave", () => {
		gsap.to(preview, { autoAlpha: 0, scale: 0.5, duration: 0.4, ease: "power3.in", overwrite: "auto" });
	});

	gsap.utils.toArray<HTMLElement>(".client-row").forEach((row, i) => {
		listen(row, "mouseenter", () => {
			images.forEach((img, j) =>
				gsap.to(img, {
					autoAlpha: i === j ? 1 : 0,
					scale: i === j ? 1 : 1.25,
					duration: 0.5,
					ease: "power3.out",
					overwrite: true,
				}),
			);
		});
	});
}

/** The red glow drifts lazily toward the cursor on dark pages. */
function orbs(listen: Listen) {
	for (const page of gsap.utils.toArray<HTMLElement>(".works")) {
		const orb = page.querySelector<HTMLElement>(".glow-orb");
		if (!orb) continue;
		const xTo = gsap.quickTo(orb, "x", { duration: 2, ease: "power2" });
		const yTo = gsap.quickTo(orb, "y", { duration: 2, ease: "power2" });

		listen(page, "mousemove", (e: MouseEvent) => {
			const r = orb.getBoundingClientRect();
			const originX = r.left + r.width / 2 - Number(gsap.getProperty(orb, "x"));
			const originY = r.top + r.height / 2 - Number(gsap.getProperty(orb, "y"));
			xTo(e.clientX - originX);
			yTo(e.clientY - originY);
		});
		listen(page, "mouseleave", () => {
			xTo(0);
			yTo(0);
		});
	}
}

/** TOC subtitles decode on hover. */
function hoverScramble(listen: Listen) {
	for (const row of gsap.utils.toArray<HTMLElement>(".toc-row")) {
		const sub = row.querySelector<HTMLElement>(".toc-sub");
		const text = sub?.dataset.text;
		if (!sub || !text) continue;
		listen(row, "mouseenter", () => {
			gsap.to(sub, {
				duration: 0.7,
				scrambleText: { text, chars: SCRAMBLE_CHARS, speed: 0.7 },
				overwrite: true,
			});
		});
	}
}

function portrait(listen: Listen) {
	const img = document.querySelector<HTMLElement>(".contact-portrait");
	if (!img) return;
	listen(img, "mouseenter", () => {
		gsap.to(img, { rotation: 5, scale: 1.06, duration: 0.6, ease: "back.out(2.5)", overwrite: "auto" });
	});
	listen(img, "mouseleave", () => {
		gsap.to(img, { rotation: -2, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.35)", overwrite: "auto" });
	});
}
