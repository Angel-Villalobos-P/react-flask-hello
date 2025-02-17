import React from "react";
import { ProyectCards } from "../component/proyectCards";
import { Link } from "react-router-dom";
import { AddProyect } from "../component/addNewProyect";
import Sidebar from "../component/Sidebar";

export const ProyectosView = () => {
	return (
		<>
			<Sidebar />
			<div className="container">
				<div id="search-bar" className="input-group d-flex flex-row justify-content-end">
					<div className="form-outline">
						<input type="search" id="form" className="form-control" placeholder="Buscar" />
					</div>
					<button id="btn" type="button" className="btn btn-primary">
						<i className="fas fa-search" />
					</button>
					<div>
						{/* <Link to="/addNewProyect">
						<button
							id="btn"
							type="button"
							className="btn btn-danger"
							data-toggle="modal"
							data-target="#exampleModal5">
							Agregar proyecto
						</button>
					</Link> */}
						<AddProyect />
					</div>
				</div>
				<div>
					<ProyectCards />
				</div>
			</div>
		</>
	);
};
