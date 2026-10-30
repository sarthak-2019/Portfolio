import Image from "next/image";
import { collageFigures } from "@/lib/content";
import { Page } from "../Page";

export function Cover() {
	return (
		<Page id="cover" className="cover" eager>
			<div className="page-grain" />
			<div className="page-content cover-head">
				<p className="kicker">The Strategy, Psychology &amp; Design</p>
				<h1 className="wordmark">
					Crimson
					<br />
					Press Kit
				</h1>
				<div className="rule" />
				<p className="tagline">Build a brand that turns heads &amp; makes money</p>
			</div>

			<div className="page-content collage">
				{collageFigures.map((n) => (
					<div className="fig" key={n}>
						<Image
							src={`/img/fig-${n}.jpg`}
							alt={`Editorial figure ${n}`}
							width={320}
							height={427}
							sizes="(min-width: 768px) 140px, 25vw"
							loading="eager"
						/>
						<span>FIG.{n}</span>
					</div>
				))}
			</div>

			<div className="page-content cover-foot">
				<div>
					Vol. 2024
					<br />
					Vance Studio
				</div>
				<div className="right">
					Based in Lisbon
					<br />
					Available Worldwide
				</div>
			</div>
		</Page>
	);
}
