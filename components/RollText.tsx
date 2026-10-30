/** Label that rolls up to a duplicate of itself when its parent is hovered. */
export function RollText({ children }: { children: string }) {
	return (
		<span className="roll" data-text={children}>
			<span>{children}</span>
		</span>
	);
}
