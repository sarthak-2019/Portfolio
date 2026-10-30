import type { ReactNode } from "react";
import type { SectionId } from "@/lib/content";

type PageProps = {
	id: SectionId;
	className: string;
	children: ReactNode;
};

/** One binder page. Entry/exit motion is applied by lib/motion/scroll.ts. */
export function Page({ id, className, children }: PageProps) {
	return (
		<section id={id} className={`page ${className}`}>
			{children}
		</section>
	);
}
