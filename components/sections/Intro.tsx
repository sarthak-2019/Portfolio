import { brands, creator, stats } from "@/lib/content";
import { Page } from "../Page";

export function Intro() {
	return (
		<Page id="intro" className="intro">
			<div className="page-content intro-wrap">
				<h2 data-split="words">
					UGC isn&apos;t about looking{" "}
					<span className="accent">
						pretty
						<svg className="squiggle" viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true">
							<path d="M4 16C28 6 46 22 72 13S120 3 146 13s40 9 50-3" />
						</svg>
					</span>
					.
					<br />
					It&apos;s about converting.
				</h2>
				<div className="intro-cols">
					<p data-split="lines">
						I&apos;m {creator.firstName} — a UGC creator and direct-response strategist. I
						make native, scroll-stopping videos for health, beauty, finance and tech brands,
						scripted around why your customers actually buy.
					</p>
					<p data-split="lines">
						Every video is built for paid social: hooks tested, captions burned in, cut for
						TikTok, Reels and Shorts. Fast turnaround, revisions included, and extra hook
						variations so you can keep testing.
					</p>
				</div>

				<dl className="intro-stats">
					{stats.map((stat) => (
						<div className="stat" key={stat.label}>
							<dt>{stat.label}</dt>
							<dd data-count={stat.value}>{stat.value}</dd>
						</div>
					))}
				</dl>
			</div>

			<div className="page-content brands">
				<p className="marquee-label" data-scramble>
					Brands I&apos;ve worked with
				</p>
				<div className="marquee">
					<div className="marquee-track">
						{[0, 1].map((copy) =>
							brands.map((brand) => (
								<span key={`${copy}-${brand}`} aria-hidden={copy === 1 || undefined}>
									{brand}
								</span>
							)),
						)}
					</div>
				</div>
			</div>
		</Page>
	);
}
