import { useEffect } from "react";
import Theme from "./Theme";
import Project from "./Project";

export default function Projects() {
	useEffect(() => {
		document.documentElement.classList.add("scroll-container");

		return () => {
			document.documentElement.classList.remove("scroll-container");
		};
	}, []);

	return (
		<>
			<Theme />
			<div>
				<div className='scroll-area'> Scroll to view projects!</div>
				<Project name='Pokedex' thumbnail='pokedex' />
				<Project name='Moonqwake' thumbnail='moonqwake' />
			</div>
		</>
	);
}
