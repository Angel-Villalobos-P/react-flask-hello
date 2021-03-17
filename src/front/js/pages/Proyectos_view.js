import React from "react";
import { ProyectCards } from "../component/proyectCards";
import { ProyectoCard } from "../component/ProyectoCard";

export const Proyectos_view = () => {
	return (
		<>
			<div className="view vh-100">
				<header className="page-header">
					<div className="container-fluid d-flex justify-content-between">
						<h2 className="no-margin-bottom titulo-dashboard">Proyectos</h2>
						<button
							id="btn-nuevo-proyecto"
							type="button"
							href="#"
							className="btn btn-outline-dark"
							data-toggle="modal"
							data-target="#form-nuevo-proyecto"
							rel="nofollow">
							+ Agregar proyecto
						</button>
					</div>
				</header>
				<div className="container-fluid">
					<div className="row">
						<ProyectoCard />
						<ProyectoCard />
						<ProyectoCard />
					</div>
				</div>
			</div>
		</>
	);
};
