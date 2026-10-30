import Image from "next/image";
import { collageFigures, creator, stats } from "@/lib/content";
import { Page } from "../Page";

// Per-column parallax speeds for the collage (ScrollSmoother data-speed).
const SPEEDS = [0.9, 1.08, 0.96, 1.14, 0.94, 1.06, 0.88];

export function Cover() {
	const kicker = `${creator.name} — Strategy-led UGC & Direct-Response Creative`;

	return (
		<Page id="cover" className="cover">
			<div className="page-grain" />
			<div className="page-content cover-head">
				<p className="kicker" data-text={kicker}>
					{kicker}
				</p>
				<h1 className="wordmark">
					UGC
					<br />
					Media Kit
				</h1>
				<div className="rule" />
				<p className="tagline">UGC ads that actually convert</p>
			</div>

			<div className="page-content collage">
				{collageFigures.map((n, i) => (
					<div className="fig" key={n} data-speed={`clamp(${SPEEDS[i % SPEEDS.length]})`}>
						<div className="fig-inner">
							<Image
								src={`/img/fig-${n}.jpg`}
								alt={`Still from UGC video ${n}`}
								width={320}
								height={427}
								sizes="(min-width: 768px) 140px, 25vw"
								loading="eager"
							/>
							<span>REEL.{String(n).padStart(2, "0")}</span>
						</div>
					</div>
				))}
			</div>

			<div className="page-content cover-foot">
				<div>
					Vol. {creator.year}
					<br />
					{creator.handle}
				</div>
				<div className="scroll-cue" aria-hidden="true">
					<span>Scroll</span>
					<i />
				</div>
				<div className="right">
					{stats[0].value} Videos · {stats[1].value} Brands
					<br />
					Available Worldwide
				</div>
			</div>
		</Page>
	);
}
