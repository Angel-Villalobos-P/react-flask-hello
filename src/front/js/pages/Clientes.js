import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarItems } from "../component/SidebarItems";
import ClienteCard from "../component/ClienteCard";
import { Clientes_view } from "./Clientes_view";
import { UserName } from "../component/userName";
import { FormUsuario } from "../component/FormUsuario";
import { Context } from "../store/appContext";

export const Clientes = () => {
	const { store, actions } = useContext(Context);
	const [activeLink, setActiveLink] = useState(null);

	return (
		<div className="page">
			<div className="header">
				<nav className="navbar1">
					<div className="container-fluid">
						<div className="navbar-holder d-flex justify-content-between">
							<div className="navbar-header">
								<a href="/" className="navbar-brand d-none d-sm-inline-block">
									<div className="brand-text d-none d-lg-inline-block">
										<i className="fas fa-project-diagram" />
										<span>PlanificApp</span>
									</div>
								</a>
							</div>
							<ul className="nav-menu1 list-unstyled d-flex flex-md-row align-items-md-center user-name-ul">
								<li>
									<div className="user-text-name d-flex align-items-center">
										<li className="nav-item">
											<img
												src="https://picsum.photos/100/100"
												alt="..."
												className="img-fluid rounded-circle avatar"
											/>
										</li>
										<li className="nav-item dropdown">
											<a
												id="usuario-menu"
												rel="nofollow"
												data-target="#"
												href="#"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
												className="nav-link dropdown-toggle">
												<span className="d-none d-sm-inline-block user-text-name">
													{/* User name */}
													{/* {store.profesional[0].nombre_de_usuario} */}
													{store.profesional ? store.profesional[0].nombre_de_usuario : ""}
												</span>
											</a>
											<ul aria-labelledby="languages" className="dropdown-menu">
												<li>
													<a
														data-toggle="modal"
														// data-target="#user-setting"
														data-target="#form-usuario"
														href="#"
														rel="nofollow"
														className="dropdown-item">
														<i className="fas fa-user-cog dropdown-item-icon" />
														Editar perfil
													</a>
												</li>
												<li>
													<Link to="/landingpage">
														<a rel="nofollow" href="#" className="dropdown-item">
															<i className="fas fa-sign-out-alt dropdown-item-icon" />
															Salir
														</a>
													</Link>
												</li>
											</ul>
										</li>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
			{/* <UserName /> */}
			<FormUsuario />
			<div className="page-content d-flex align-items-stretch">
				<nav className="side-navbar">
					<ul className="nav-menu-items">
						{SidebarItems.map((item, index) => {
							return (
								<li
									key={index}
									className={item.cName + (activeLink === index ? " active" : "")}
									onClick={() => setActiveLink(index)}>
									<Link to={item.path}>
										{item.icon}
										<span>{item.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="content-inner vw-100">
					<Clientes_view />
				</div>
			</div>
		</div>
	);
};
