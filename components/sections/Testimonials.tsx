import { testimonials } from "@/lib/content";
import { Page } from "../Page";

export function Testimonials() {
	return (
		<Page id="testimonials" className="works testimonials">
			<div className="page-content works-head">
				<div>
					<h2 data-split="chars">
						Client
						<br />
						Notes
					</h2>
					<p className="works-sub" data-scramble>
						What my clients have to say
					</p>
				</div>
				<div className="glow-orb" />
			</div>

			<div className="page-content quotes">
				{testimonials.map((t) => (
					<figure className="quote" key={t.detail}>
						<p className="quote-stars" role="img" aria-label="5 out of 5 stars">
							{Array.from({ length: 5 }, (_, i) => (
								<span key={i} aria-hidden="true">
									★
								</span>
							))}
						</p>
						<blockquote>“{t.quote}”</blockquote>
						<figcaption className="quote-by">
							<strong>{t.who}</strong>
							{t.detail}
						</figcaption>
					</figure>
				))}
			</div>
		</Page>
	);
}
