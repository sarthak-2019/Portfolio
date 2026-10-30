"use client";

import { useRef, useState, type FormEvent } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { Send } from "./icons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QueryForm() {
	const [note, setNote] = useState("");
	const formRef = useRef<HTMLFormElement>(null);
	const { contextSafe } = useGSAP({ scope: formRef });

	const shake = contextSafe(() => {
		gsap.fromTo(
			".q-fields",
			{ x: 0 },
			{ keyframes: { x: [-12, 10, -7, 5, -2, 0] }, duration: 0.5, ease: "power2.out" },
		);
	});

	// Paper plane flies off, then a fresh one swoops back in.
	const fly = contextSafe(() => {
		gsap
			.timeline()
			.to(".q-send svg", { x: 60, y: -50, rotation: 20, opacity: 0, duration: 0.45, ease: "power2.in" })
			.set(".q-send svg", { x: -40, y: 30, rotation: -20 })
			.to(".q-send svg", { x: 0, y: 0, rotation: 0, opacity: 1, duration: 0.7, ease: "back.out(2)" });
	});

	const flash = contextSafe(() => {
		gsap.fromTo(".q-note", { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "expo.out" });
	});

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();

		if (!name || !email) {
			setNote("Please add a name & email.");
			shake();
		} else if (!EMAIL_RE.test(email)) {
			setNote("That email looks off.");
			shake();
		} else {
			setNote(`Sent, I'll be in touch, ${name}.`);
			fly();
			form.reset();
		}
		flash();
	}

	return (
		<form ref={formRef} className="query" id="query-form" noValidate onSubmit={handleSubmit}>
			<p className="q-label">Got a brief?</p>
			<div className="q-fields">
				<div className="q-row">
					<label className="field">
						<input type="text" name="name" placeholder="NAME" autoComplete="name" />
					</label>
					<label className="field">
						<input type="email" name="email" placeholder="EMAIL" autoComplete="email" />
					</label>
				</div>
				<label className="field q-msg">
					<input type="text" name="message" placeholder="WHAT ARE YOU SELLING?" />
					<button className="q-send" type="submit" aria-label="Send query" data-magnetic="0.6">
						<Send />
					</button>
				</label>
				<p className="q-note" id="q-note" role="status">
					{note}
				</p>
			</div>
		</form>
	);
}
