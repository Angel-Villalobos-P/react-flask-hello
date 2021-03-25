import React, { useState, useContext } from "react";
import "../../styles/TareaCard.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Timer } from "./Timer";
import { Context } from "../store/appContext";

export const TareaCard = () => {
	const { store, actions } = useContext(Context);

	const [playing, setPlaying] = useState(false);

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

	const changeHandler = e => {
		if (e.target.checked) {
			Swal.fire({
				icon: "success",
				title: "¡Tarea completada!",
				showConfirmButton: true,
				timer: 1500
			});
		}
	};

	return (
		<div className="tarea">
			<div className="row bg-white has-shadow">
				<div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
					<div className="d-flex align-items-center">
						{/* <div className="icon-play bg-violet" onClick={() => setPlaying(!playing)}>
							{playing ? <i className="fas fa-pause" /> : <i className="fas fa-play" />} */}
						<div className="icon-play bg-violet" onClick={() => actions.Temporizador()}>
							{store.timer ? <i className="fas fa-pause" /> : <i className="fas fa-play" />}
						</div>
						<div className="tarea-title" onClick={() => click()}>
							<h3 className="h4">Tarea Title</h3>
							<Timer />
						</div>
					</div>
				</div>
				<div className="right-col col-lg-6 d-flex align-items-center justify-content-end">
					<div className="time">12:00 </div>
					<div className="form-check checkbox">
						<input
							className="form-check-input checkbox"
							type="checkbox"
							value=""
							id="flexCheckDefault"
							onChange={changeHandler}
						/>
						<label className="form-check-label" htmlFor="flexCheckDefault" />
					</div>
				</div>
			</div>
		</div>
	);
};
