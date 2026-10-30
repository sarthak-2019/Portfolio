import { creator, reels } from "@/lib/content";
import { ArrowRight } from "../icons";
import { Page } from "../Page";
import { ReelCard } from "../ReelCard";

export function Works() {
	return (
		<Page id="works" className="works">
			<div className="page-content works-head">
				<div>
					<h2 data-split="chars">
						Sample
						<br />
						Work
					</h2>
					<p className="works-sub" data-scramble>
						Content that stops the scroll
					</p>
				</div>
				<div className="glow-orb" />
			</div>

			<div className="page-content reels-grid">
				{reels.map((reel) => (
					<ReelCard key={`${reel.brand}-${reel.format}`} reel={reel} />
				))}

				<a
					className="work work-archive reel-archive"
					href={creator.instagram}
					target="_blank"
					rel="noreferrer"
					data-cursor="Open"
				>
					<div>
						<h3>
							Full
							<br />
							Reel
							<br />
							Library
						</h3>
						<p>
							30+ more ads across beauty, finance, health and tech — hooks, demos,
							testimonials and try-ons.
						</p>
					</div>
					<ArrowRight className="archive-arrow" strokeWidth={1.6} />
				</a>
			</div>
		</Page>
	);
}
