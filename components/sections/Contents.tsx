import Image from "next/image";
import { Page } from "../Page";
import { Toc } from "../Toc";

export function Contents() {
	return (
		<Page id="contents" className="contents">
			<div className="page-content contents-head">
				<div>
					<span className="eyebrow">Vance Studio</span>
					<h2>Contents</h2>
				</div>
				<span className="year">2024</span>
			</div>

			<div className="page-content contents-body">
				<div className="contents-portrait">
					<Image
						src="/img/portrait-contents.jpg"
						alt="Editorial portrait of Mara Vance"
						width={900}
						height={600}
						sizes="(min-width: 768px) 420px, 100vw"
					/>
					<span className="name-tag">Mara Vance</span>
				</div>

				<Toc />
			</div>
		</Page>
	);
}
