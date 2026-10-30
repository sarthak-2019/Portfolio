import { Fab } from "@/components/Fab";
import { Grain } from "@/components/Grain";
import { Contact } from "@/components/sections/Contact";
import { Contents } from "@/components/sections/Contents";
import { Cover } from "@/components/sections/Cover";
import { Intro } from "@/components/sections/Intro";
import { Method } from "@/components/sections/Method";
import { Works } from "@/components/sections/Works";

function Spiral() {
	return <div className="spiral" />;
}

export default function Home() {
	return (
		<>
			<Grain />

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
					<Method />
					<Spiral />
					<Contact />
				</main>
			</div>

			<Fab />
		</>
	);
}
