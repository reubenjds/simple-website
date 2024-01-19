import { Link } from "react-router-dom";

function Back() {
	return (
		<Link to='/'>
			<div class='back'>⟵</div>
		</Link>
	);
}

export default Back;
