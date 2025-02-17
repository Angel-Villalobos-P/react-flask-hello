import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarItems } from "./SidebarItems";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import "../../styles/Sidebar.scss";
import { NavbarApp } from "./NavbarApp";

const Sidebar = () => {
	const [mostrar, setMostrar] = useState(true);

	const mostrarSidebar = () => {
		setMostrar(!mostrar);
	};

	return (
		<div className="sidebar">
			<div className="navbar d-flex flex-row-reverse">
				<span className="navbar-brand mb-0 h1 nav-text">user name</span>
				<Link to="/userName">
					<button
						type="button"
						className="btn btn-outline-dark rounded-circle"
						data-toggle="modal"
						data-target="#exampleModal7">
						<i className="fas fa-user-circle" />
					</button>
				</Link>
				<span> </span>
			</div>
			{/* <NavbarApp /> */}
			<nav className="nav-menu active">
				<ul className="nav-menu-items">
					{/* <li className="nav-text">
						<Link to="#" className="menu-bars">
							Planific App
						</Link>
					</li> */}
					{SidebarItems.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									{item.icon}
									<span>{item.title}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
