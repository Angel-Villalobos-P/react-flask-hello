import React from "react";
import { Link } from "react-router-dom";
import { FormProyecto } from "./FormProyecto";
import "../../styles/ProyectoCard.scss";
import Swal from "sweetalert2";

export const ProyectoCard = () => {
	const eliminar = dato => {
		Swal.fire({
			title: "¿Está seguro?",
			text: "No se podrá recuperar",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, borrar"
		}).then(result => {
			if (result.isConfirmed) {
				//Swal.fire("Deleted!", "Your file has been deleted.", "success");
				// Eliminar de la base de datos
			}
		});
	};

	return (
		<div id="proyecto-card" className="card border-primary has-shadow">
			<div className="card-header">
				<Link to="/">
					<h5 className="nombre-cliente">Nombre del proyecto</h5>
				</Link>
			</div>
			<div className="card-menu">
				<div className="dropdown">
					<button
						type="button"
						id="menuCard"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						className="dropdown-toggle">
						<i className="fa fa-ellipsis-v" />
					</button>
					<div aria-labelledby="menuCard" className="dropdown-menu dropdown-menu-right has-shadow">
						<a
							href="#"
							className="dropdown-item"
							data-toggle="modal"
							data-target="#form-nuevo-proyecto"
							rel="nofollow">
							<i className="far fa-edit" />
							Editar
						</a>
						<a href="#" className="dropdown-item" onClick={() => eliminar("dato")}>
							<i className="far fa-trash-alt" />
							Eliminar
						</a>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center ">
				<div className="card-body text-primary">
					<p className="card-text">
						Neque per quisquam est qui dolorem ipsum quia dolor Neque per quisquam est qui dolorem ipsum
						quia dolor
					</p>
					<div className="d-flex justify-content-center">
						<div className="row ">
							<small className="card-text">
								<i className="fas fa-check-double" style={{ marginRight: "2px" }} />
								4/5
								<i className="far fa-calendar-alt" style={{ marginRight: "2px", marginLeft: "15px" }} />
								16 de mar
								<i className="far fa-clock" style={{ marginRight: "2px", marginLeft: "15px" }} />
								4:00
								<i className="fas fa-user" style={{ marginRight: "2px", marginLeft: "15px" }} />
								Cliente nombre
							</small>
							{/* <i className="fas fa-clipboard-list mr-5 mt-4 proIcon" /> */}
							{/* <i className="far fa-calendar-alt mr-5 mt-4 proIcon" />
                                <i className="far fa-clock mr-5 mt-4 proIcon" /> */}
						</div>
					</div>
				</div>
			</div>

			{/* <div className="row d-flex justify-content-center ">
				<div className="col-8">
					<div className="card-body text-primary">
						<p>Neque per quisquam est qui dolorem ipsum quia dolor</p>

						<div className="d-flex justify-content-center mr-3 ">
							<div className="row ">
								<i className="fas fa-clipboard-list mr-5 mt-4 proIcon" />
								<i className="far fa-calendar-alt mr-5 mt-4 proIcon" />
								<i className="far fa-clock mr-5 mt-4 proIcon" />
								<i className="fas fa-user mr-5 mt-4 proIcon" />
							</div>
						</div>
					</div>
				</div>
			</div> */}
			<FormProyecto />
		</div>
	);
};
