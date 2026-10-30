import Image from "next/image";
import { creator } from "@/lib/content";
import { Page } from "../Page";
import { Toc } from "../Toc";

export function Contents() {
	return (
		<Page id="contents" className="contents">
			<div className="page-content contents-head">
				<div>
					<span className="eyebrow" data-scramble>
						{creator.name} · {creator.role}
					</span>
					<h2 data-split="chars">Contents</h2>
				</div>
				<span className="year" data-scramble>
					{creator.year}
				</span>
			</div>

			<div className="page-content contents-body">
				<div className="contents-portrait" data-cursor="Hello!">
					<Image
						src="/img/portrait-contents.jpg"
						alt={`Portrait of ${creator.name}`}
						width={900}
						height={600}
						sizes="(min-width: 768px) 420px, 100vw"
					/>
					<span className="name-tag">
						{creator.name} · {creator.role}
					</span>
				</div>

				<Toc />
			</div>
		</Page>
	);
}
