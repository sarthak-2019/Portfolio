"use client";

import { useState, type FormEvent } from "react";
import { Send } from "./icons";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QueryForm() {
	const [note, setNote] = useState("");

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get("name") ?? "").trim();
		const email = String(data.get("email") ?? "").trim();

		if (!name || !email) {
			setNote("Please add a name & email.");
			return;
		}
		if (!EMAIL_RE.test(email)) {
			setNote("That email looks off.");
			return;
		}
		setNote(`Sent, I'll be in touch, ${name}.`);
		form.reset();
	}

	return (
		<form className="query" id="query-form" noValidate onSubmit={handleSubmit}>
			<p className="q-label">Have a quick question?</p>
			<div className="q-fields">
				<div className="q-row">
					<input type="text" name="name" placeholder="NAME" autoComplete="name" />
					<input type="email" name="email" placeholder="EMAIL" autoComplete="email" />
				</div>
				<div className="q-msg">
					<input type="text" name="message" placeholder="HOW CAN I HELP?" />
					<button className="q-send" type="submit" aria-label="Send query">
						<Send />
					</button>
				</div>
				<p className="q-note" id="q-note" role="status">
					{note}
				</p>
			</div>
		</form>
	);
}
