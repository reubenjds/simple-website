import { useEffect } from "react";
import Theme from "./Theme";
import Project from "./Project";
import Projs from "../assets/Projects.json";
import Back from "./Back";

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
			<Back />
			<div>
				<div class='scroll-area'> Scroll to view projects! </div>
				{Projs.map((p) => {
					return (
						<Project
							name={p.name}
							link={p.link}
							github={p.github ?? null}
							description={p.description}></Project>
					);
				})}
			</div>
		</>
	);
}
