import { processSteps } from "@/lib/content";
import { Page } from "../Page";

export function Process() {
	return (
		<Page id="process" className="method">
			<div className="page-grain" />
			<div className="page-content method-grid">
				<div className="method-lead">
					<span className="method-progress" aria-hidden="true" />
					<h2 data-split="chars">
						The
						<br />
						Process
					</h2>
					<p data-split="words">From brief to an ad that runs for months.</p>
				</div>

				<div className="method-steps">
					{processSteps.map((step) => (
						<div className="method-card" key={step.title}>
							<h3>{step.title}</h3>
							<p>{step.body}</p>
						</div>
					))}
				</div>
			</div>
		</Page>
	);
}
