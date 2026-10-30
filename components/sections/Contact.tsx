import Image from "next/image";
import { email } from "@/lib/content";
import { Instagram, LinkedIn, Mail } from "../icons";
import { Page } from "../Page";
import { QueryForm } from "../QueryForm";

export function Contact() {
	return (
		<Page id="contact" className="contact">
			<div className="page-content contact-grid">
				<div className="contact-left">
					<div>
						<Image
							className="contact-portrait"
							src="/img/portrait-contact.jpg"
							alt="Mara Vance"
							width={190}
							height={250}
						/>
						<h2>
							Let&apos;s Build Something
							<br />
							Iconic Together.
						</h2>
						<p className="blurb">
							Currently accepting new projects for Q4 2024. If you&apos;re ready to stop
							playing safe and start building a legacy, get in touch.
						</p>
					</div>
					<div className="contact-btns">
						<button className="btn btn-solid" type="button">
							Book a Call
						</button>
						<a className="btn btn-outline" href={`mailto:${email}`}>
							Email Me
						</a>
					</div>
				</div>

				<div className="contact-right">
					<QueryForm />

					<div className="contact-links">
						<div className="socials">
							<a href="#" aria-label="Instagram">
								<span>Instagram</span>
								<Instagram />
							</a>
							<a href="#" aria-label="LinkedIn">
								<span>LinkedIn</span>
								<LinkedIn />
							</a>
							<a href={`mailto:${email}`} aria-label="Email">
								<span>{email}</span>
								<Mail />
							</a>
						</div>

						<p className="copyright">
							© 2024 Mara Vance / Vance Studio.
							<br />
							All Rights Reserved.
							<br />
							Designed &amp; Developed in the Lab.
						</p>
					</div>
				</div>
			</div>
		</Page>
	);
}
