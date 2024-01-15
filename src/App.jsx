import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Name from "./Name.jsx";
import Logos from "./Logos.jsx";
import Theme from "./Theme.jsx";
import Project from "./Project.jsx";
import ViewProjects from "./ViewProjects.jsx";

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
				<Route
					path='projects'
					element={
						<>
							<Theme />
							<div class='scroll-container'>
								<Project />
								<Project />
								<Project />
							</div>
						</>
					}
				/>
				{/* Catch all route */}
				<Route path='*' element={<div>404</div>} />
			</Routes>
		</Router>
	);
}

export default App;
