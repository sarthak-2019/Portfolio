"use client";

import { useEffect } from "react";

function makeNoise(size: number, alpha: number) {
	const c = document.createElement("canvas");
	c.width = c.height = size;
	const ctx = c.getContext("2d");
	if (!ctx) return null;
	const img = ctx.createImageData(size, size);
	for (let i = 0; i < img.data.length; i += 4) {
		const v = (Math.random() * 255) | 0;
		img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
		img.data[i + 3] = alpha;
	}
	ctx.putImageData(img, 0, 0);
	return c.toDataURL();
}

// Generates the shared --noise texture used by .grain and .page-grain.
export function Grain() {
	useEffect(() => {
		const noise = makeNoise(140, 22);
		if (noise) document.documentElement.style.setProperty("--noise", `url(${noise})`);
	}, []);

	return <div className="grain" />;
}
