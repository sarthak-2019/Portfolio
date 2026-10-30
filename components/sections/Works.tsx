import Image from "next/image";
import { works } from "@/lib/content";
import { ArrowRight, ArrowUpRight } from "../icons";
import { Page } from "../Page";

export function Works() {
	return (
		<Page id="works" className="works">
			<div className="page-content works-head">
				<h2>
					Selected
					<br />
					Works
				</h2>
				<div className="glow-orb" />
			</div>

			<div className="page-content works-grid">
				{works.map((work) => (
					<article key={work.title} className={`work${work.stagger ? " stagger" : ""}`}>
						<div className={`work-media${work.square ? " square" : ""}`}>
							<div className="work-wash" />
							<span className="work-year">{work.year}</span>
							<Image
								src={work.src}
								alt={work.alt}
								width={work.width}
								height={work.height}
								sizes="(min-width: 768px) 460px, 100vw"
							/>
						</div>
						<div className="work-foot">
							<div>
								<h3>{work.title}</h3>
								<p>{work.tags}</p>
							</div>
							<ArrowUpRight className="work-arrow" />
						</div>
					</article>
				))}

				<article className="work stagger work-archive">
					<div>
						<h3>
							More
							<br />
							Archives
						</h3>
						<p>
							A deeper dive into the vault of past experiments, posters, and typography
							studies.
						</p>
					</div>
					<ArrowRight className="archive-arrow" strokeWidth={1.6} />
				</article>
			</div>
		</Page>
	);
}
