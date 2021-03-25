import React from "react";
import { Link } from "react-router-dom";
import { Login } from "./popUpsLandingPage/login";
import { SignUp } from "./popUpsLandingPage/signUp";
import "../../styles/landing.scss";

export const Navbar = () => {
	return (
		// <nav className=" nav-landing navbar-light bg-light mb-3 border border-dark">
		<nav className="nav-landing mb-3">
			<Link to="/">
				<i className="fas fa-project-diagram logo-landing" />
				<span className="navbar-brand mb-0 h1 ml-1">PlanificApp</span>
			</Link>

			<div className="ml-auto">
				<Link to="/contacto">
					<a className="ml-2 text-light text-navbar-landing">Contacto</a>
				</Link>
				<Link to="/caracteristicas">
					<a className="ml-2 text-light text-navbar-landing">Características</a>
				</Link>
				<Link to="/precios">
					<a id="precios-item-landing-nav" className="ml-2 text-light text-navbar-landing">
						Precios
					</a>
				</Link>
			</div>
			<Login />
			<span />
			<SignUp />
		</nav>
		// <nav className="navbar1">
		// 	<div className="container-fluid">
		// 		<div className="navbar-holder d-flex justify-content-between">
		// 			<div className="navbar-header">
		// 				<a href="/" className="navbar-brand d-none d-sm-inline-block">
		// 					<div className="brand-text d-none d-lg-inline-block">
		// 						<i className="fas fa-project-diagram" />
		// 						<span>PlanificApp</span>
		// 					</div>
		// 				</a>
		// 			</div>
		// 			<div className="ml-auto">
		// 				<Link to="/contacto">
		// 					<a className="ml-2 text-dark">Contacto</a>
		// 				</Link>
		// 				<Link to="/caracteristicas">
		// 					<a className="ml-2 text-dark">Características</a>
		// 				</Link>
		// 				<Link to="/precios">
		// 					<a className="ml-2 text-dark">Precios</a>
		// 				</Link>
		// 			</div>
		// 			<Login />
		// 			<SignUp />
		// 		</div>
		// 	</div>
		// </nav>
	);
};
