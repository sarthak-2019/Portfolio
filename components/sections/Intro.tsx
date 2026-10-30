import { Page } from "../Page";

export function Intro() {
	return (
		<Page id="intro" className="intro">
			<div className="page-content intro-wrap">
				<h2>
					Design isn&apos;t just about making things look{" "}
					<span className="accent">pretty</span>.
					<br />
					It&apos;s about domination.
				</h2>
				<div className="intro-cols">
					<p>
						I&apos;m Mara. I help ambitious founders build brands that don&apos;t just sit
						on the shelf — they scream off it. Using a blend of consumer psychology and raw
						editorial aesthetics, I craft identities that are impossible to ignore.
					</p>
					<p>
						This press kit is a collection of my obsession with typography, layout, and brand
						voice. It&apos;s raw, it&apos;s unpolished in spirit, but precise in execution.
						Welcome to the edit.
					</p>
				</div>
			</div>
		</Page>
	);
}
