import { methodSteps } from "@/lib/content";
import { Page } from "../Page";

export function Method() {
	return (
		<Page id="method" className="method">
			<div className="page-grain" />
			<div className="page-content method-grid">
				<div className="method-lead">
					<h2>
						The
						<br />
						Method
					</h2>
					<p>We don&apos;t guess. We dissect, strategize, and reconstruct.</p>
				</div>

				<div className="method-steps">
					{methodSteps.map((step) => (
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
