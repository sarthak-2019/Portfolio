import { Fab } from "@/components/Fab";
import { Grain } from "@/components/Grain";
import { Cursor } from "@/components/motion/Cursor";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Contents } from "@/components/sections/Contents";
import { Cover } from "@/components/sections/Cover";
import { Intro } from "@/components/sections/Intro";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { Works } from "@/components/sections/Works";

function Spiral() {
	return <div className="spiral" />;
}

export default function Home() {
	return (
		<>
			<Grain />

			<MotionProvider>
				<div className="binder">
					<main>
						<Cover />
						<Spiral />
						<Contents />
						<Spiral />
						<Intro />
						<Spiral />
						<Works />
						<Spiral />
						<Clients />
						<Spiral />
						<Testimonials />
						<Spiral />
						<Process />
						<Spiral />
						<Contact />
					</main>
				</div>
			</MotionProvider>

			<Fab />
			<Cursor />
		</>
	);
}
