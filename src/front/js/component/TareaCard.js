import React from "react";
import "../../styles/TareaCard.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Timer } from "./Timer";

export const TareaCard = () => {
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
		<div className="tarea">
			<div className="row bg-white has-shadow">
				<div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
					<div className="d-flex align-items-center">
						<div className="icon-play bg-violet">
							{/* <img src="ihttps://picsum.photos/50/50" alt="..." className="img-fluid" /> */}
							<i className="fas fa-play" />
						</div>
						<div className="tarea-title">
							<h3 className="h4">Tarea Title</h3>
							{/* <i className="far fa-calendar-alt" style={{ marginRight: "2px" }} />
							<small className="hidden-sm-down">16 de mar</small> */}
							<Timer />
						</div>
					</div>
					{/* <div className="tarea-date">
						<i className="far fa-calendar-alt" />
						<p className="hidden-sm-down">16/03/2021</p>
					</div> */}
				</div>
				<div className="right-col col-lg-6 d-flex align-items-center justify-content-end">
					<div className="time">
						{/* <i className="far fa-clock" /> */}
						12:00{" "}
					</div>
					{/* <div className="comments">
						<i className="fa fa-comment-o" />
						20
					</div> */}
					{/* <div className="tarea-progress">
						<div className="progress">
							<div
								role="progressbar"
								style={{ width: "45%", height: "6px" }}
								aria-valuenow="25"
								aria-valuemin="0"
								aria-valuemax="100"
								className="progress-bar bg-red"
							/>
						</div>
					</div> */}
					{/* <div className="form-check">
						<input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
						<label className="form-check-label" htmlFor="flexCheckChecked">
							Checked checkbox
						</label>
					</div> */}
					{/* <div className="form-check checkbox">
						<input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" />
						<label className="form-check-label" htmlFor="flexCheckDefault">
							checkbox
						</label>
					</div> */}
					<div className="checkbox">
						<label>
							<input type="checkbox" value="" />
							<div className="cr">
								<i className="cr-icon fas fa-check" />
							</div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};
