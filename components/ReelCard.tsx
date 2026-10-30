"use client";

import Image from "next/image";
import { useState } from "react";
import type { Reel } from "@/lib/content";
import { Play } from "./icons";

export function ReelCard({ reel }: { reel: Reel }) {
	const [playing, setPlaying] = useState(false);

	return (
		<article className="work" data-cursor={reel.video ? "Play" : "View"}>
			<div className="work-media reel">
				<div className="work-wash" />
				<span className="work-year">{reel.format}</span>
				{playing && reel.video ? (
					<video src={reel.video} poster={reel.poster} autoPlay controls playsInline />
				) : (
					<>
						<Image
							src={reel.poster}
							alt={`${reel.brand} UGC video`}
							width={reel.posterWidth}
							height={reel.posterHeight}
							sizes="(min-width: 768px) 300px, 50vw"
						/>
						{reel.video && (
							<button
								type="button"
								className="reel-play"
								aria-label={`Play ${reel.brand} video`}
								data-magnetic="0.5"
								onClick={() => setPlaying(true)}
							>
								<Play />
							</button>
						)}
					</>
				)}
			</div>
			<div className="work-foot">
				<div>
					<h3>{reel.brand}</h3>
					<p>
						{reel.niche} · {reel.duration}
					</p>
				</div>
			</div>
		</article>
	);
}
