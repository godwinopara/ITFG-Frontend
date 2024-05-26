import { Link } from "react-router-dom";

export default function NavItem() {
	return (
		<ul>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/projects">Trading</Link>
			</li>
			<li>
				<Link to="/Platforms">Platforms</Link>
			</li>
			<li>
				<Link to="/contact">Promotions</Link>
			</li>
		</ul>
	);
}
