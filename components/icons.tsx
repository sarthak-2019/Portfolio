import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, strokeWidth = 2, ...props }: IconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={strokeWidth}
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			{...props}
		>
			{children}
		</svg>
	);
}

export const ArrowUpRight = (props: IconProps) => (
	<Icon {...props}>
		<line x1="7" y1="17" x2="17" y2="7" />
		<polyline points="7 7 17 7 17 17" />
	</Icon>
);

export const ArrowRight = (props: IconProps) => (
	<Icon {...props}>
		<line x1="5" y1="12" x2="19" y2="12" />
		<polyline points="12 5 19 12 12 19" />
	</Icon>
);

export const ArrowUp = (props: IconProps) => (
	<Icon {...props}>
		<line x1="12" y1="19" x2="12" y2="5" />
		<polyline points="5 12 12 5 19 12" />
	</Icon>
);

export const Send = (props: IconProps) => (
	<Icon {...props}>
		<line x1="22" y1="2" x2="11" y2="13" />
		<polygon points="22 2 15 22 11 13 2 9 22 2" />
	</Icon>
);

export const Play = (props: IconProps) => (
	<Icon fill="currentColor" {...props}>
		<polygon points="7 4 20 12 7 20 7 4" />
	</Icon>
);

export const TikTok = (props: IconProps) => (
	<Icon {...props}>
		<path d="M9 12a4 4 0 1 0 4 4V3c.6 2.8 2.6 4.6 5.5 5" />
	</Icon>
);

export const Instagram = (props: IconProps) => (
	<Icon {...props}>
		<rect x="2" y="2" width="20" height="20" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
	</Icon>
);

export const LinkedIn = (props: IconProps) => (
	<Icon {...props}>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect x="2" y="9" width="4" height="12" />
		<circle cx="4" cy="4" r="2" />
	</Icon>
);

export const Mail = (props: IconProps) => (
	<Icon {...props}>
		<rect x="2" y="4" width="20" height="16" rx="2" />
		<polyline points="22,6 12,13 2,6" />
	</Icon>
);
