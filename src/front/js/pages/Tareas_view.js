import React from "react";
import { TareaCard } from "../component/TareaCard";
import "../../styles/TareaCard.scss";
import { FormTarea } from "../component/FormTarea";

export const Tareas_view = () => {
	return (
		<>
			<div className="view vh-100">
				<header className="page-header">
					<div className="container-fluid d-flex justify-content-between">
						<h2 className="no-margin-bottom titulo-dashboard">Tareas</h2>
						{/* <NewCostumer /> */}
						<button
							id="btn-nuevo-cliente"
							type="button"
							href="#"
							className="btn btn-outline-dark"
							data-toggle="modal"
							data-target="#form-nueva-tarea"
							rel="nofollow">
							+ Agregar Tarea
						</button>
					</div>
				</header>
				<div className="container-fluid">
					<div className="row d-block">
						<TareaCard />
					</div>
					<div className="row d-block">
						<TareaCard />
					</div>
					<div className="row d-block">
						<TareaCard />
					</div>
					<FormTarea />
				</div>
			</div>
		</>
	);
};
