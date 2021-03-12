import React from "react";
import { Link } from "react-router-dom";

export const NavbarApp = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">PlanificApp</span>
			</Link>
			<div className="ml-auto">
                <Link to="/userName">
				<button type="button" className="btn btn-outline-dark rounded-circle" data-toggle="modal" data-target="#exampleModal7">
					<i className="fas fa-user-circle" />
				</button>
                </Link>
				<span> </span>
				<span className="navbar-brand mb-0 h1">user name</span>
			</div>
		</nav>
	);
};
