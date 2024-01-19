import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Name from "./Name.jsx";
import Logos from "./Logos.jsx";
import Theme from "./Theme.jsx";
import ViewProjects from "./ViewProjects.jsx";
import Projects from "./Projects.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={
						<div class='main'>
							<Theme />
							<Name />
							<Logos />
							<div>
								<ViewProjects />
							</div>
						</div>
					}
				/>
				<Route path='projects' element={<Projects />} />
			</Routes>
		</Router>
	);
}

export default App;
