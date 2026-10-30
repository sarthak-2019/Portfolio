import Image from "next/image";
import { clients } from "@/lib/content";
import { Page } from "../Page";

export function Clients() {
	return (
		<Page id="clients" className="clients">
			<div className="page-content contents-head">
				<div>
					<span className="eyebrow" data-scramble>
						Clients
					</span>
					<h2 data-split="chars">
						Trusted
						<br />
						By
					</h2>
				</div>
				<span className="year" data-scramble>
					{String(clients.length).padStart(2, "0")} Brands
				</span>
			</div>

			<ol className="page-content client-list">
				{clients.map((client, i) => (
					<li className="client-row" key={client.brand}>
						<span className="toc-index">{String(i + 1).padStart(2, "0")}.</span>
						<span>
							<span className="client-name">{client.brand}</span>
							<span className="client-niche">{client.niche}</span>
						</span>
						<span className="client-count">
							{client.videos} {client.videos === 1 ? "video" : "videos"}
						</span>
					</li>
				))}
			</ol>

			{/* Cursor-following preview, driven by lib/motion/pointer.ts */}
			<div className="client-preview" aria-hidden="true">
				{clients.map((client) => (
					<Image key={client.brand} src={client.image} alt="" width={320} height={427} sizes="220px" />
				))}
			</div>
		</Page>
	);
}
