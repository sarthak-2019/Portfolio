import Image from "next/image";
import { creator } from "@/lib/content";
import { Instagram, Mail, TikTok } from "../icons";
import { Page } from "../Page";
import { QueryForm } from "../QueryForm";
import { RollText } from "../RollText";

export function Contact() {
	return (
		<Page id="contact" className="contact">
			<div className="page-content contact-grid">
				<div className="contact-left">
					<div>
						<Image
							className="contact-portrait"
							src="/img/portrait-contact.jpg"
							alt={creator.name}
							width={190}
							height={250}
							data-cursor="Hi!"
						/>
						<h2 data-split="words">
							Let&apos;s Make Ads
							<br />
							That Convert.
						</h2>
						<p className="blurb" data-split="lines">
							{creator.booking} Tell me about your product and goals — I&apos;ll get back
							to you within one business day.
						</p>
					</div>
					<div className="contact-btns">
						<a
							className="btn btn-solid"
							href={`mailto:${creator.email}?subject=UGC%20project%20enquiry`}
							data-magnetic="0.3"
						>
							<RollText>Get Your Ads Made</RollText>
						</a>
						<a
							className="btn btn-outline"
							href={creator.instagram}
							target="_blank"
							rel="noreferrer"
							data-magnetic="0.3"
						>
							<RollText>DM on Instagram</RollText>
						</a>
					</div>
				</div>

				<div className="contact-right">
					<QueryForm />

					<div className="contact-links">
						<div className="socials">
							<a href={creator.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
								<RollText>{`Instagram ${creator.handle}`}</RollText>
								<Instagram />
							</a>
							<a href={creator.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
								<RollText>{`TikTok ${creator.handle}`}</RollText>
								<TikTok />
							</a>
							<a href={`mailto:${creator.email}`} aria-label="Email">
								<RollText>{creator.email}</RollText>
								<Mail />
							</a>
						</div>

						<p className="copyright">
							© {creator.year} {creator.name} · {creator.handle}.
							<br />
							All Rights Reserved.
							<br />
							Scripted, Shot &amp; Edited In-House.
						</p>
					</div>
				</div>
			</div>
		</Page>
	);
}
