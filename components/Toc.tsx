"use client";

import { tocEntries } from "@/lib/content";
import { scrollToSection } from "@/lib/scroll";

export function Toc() {
	return (
		<nav className="toc">
			{tocEntries.map((entry) => (
				<button
					key={entry.index}
					type="button"
					className="toc-row"
					onClick={() => scrollToSection(entry.target)}
				>
					<span className="toc-inner">
						<span className="toc-index">{entry.index}</span>
						<span>
							<span className="toc-title">{entry.title}</span>
							<span className="toc-sub">{entry.sub}</span>
						</span>
					</span>
				</button>
			))}
		</nav>
	);
}
