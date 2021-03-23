import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../store/appContext";
import DatePicker from "react-datepicker";

export const FormTarea = () => {
	const [startDate, setStartDate] = useState(new Date());
	const { store, actions } = useContext(Context);

	//para el formato de las fechas
	var options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	};

	const [tarea, setTarea] = useState({
		id_proyecto: 0,
		nombre_tarea: "",
		fecha_entrega: startDate.toLocaleDateString(options),
		horas_totales: ""
	});

	const agregarTarea = () => {
		actions.AddTarea(tarea);
	};

	const handleChange = event => {
		setTarea({
			...tarea,
			[event.target.name]: event.target.value
		});
		console.log(tarea);
	};

	return (
		<div
			className="modal fade"
			id="form-nueva-tarea"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			data-backdrop="false">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header d-flex align-items-center">
						<i className="fas fa-tasks" />
						<span />
						<h4 className="modal-title" id="exampleModalLabel">
							Tarea
						</h4>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body newmodal">
						<div className="form-group">
							<label>Nombre de la tarea:</label>
							<input
								type="text"
								placeholder="Nombre de la tarea"
								className="form-control"
								name="nombre_tarea"
								onChange={handleChange}
							/>
						</div>
						<div className="form-group">
							<label>Proyecto:</label>
							<select
								className="custom-select"
								id="inputGroupSelect01"
								onChange={handleChange}
								name="id_proyecto">
								<option selected>Elija el proyecto...</option>
								{!!store.proyectos &&
									store.proyectos.map((proyecto, index) => {
										return (
											<option key={index} value={proyecto.id}>
												{proyecto.nombre_proyecto}
											</option>
										);
									})}
							</select>
						</div>
						<div className="form-group">
							<div className="row">
								<div className="col-6">
									<label>Total horas:</label>
									<input
										className="form-control"
										aria-label="With textarea"
										onChange={handleChange}
										name="horas_totales"
									/>
								</div>
								<div className="col-6">
									<label>Fecha de entrega:</label>
									<br />
									<DatePicker
										selected={startDate}
										onChange={date => {
											setStartDate(date);
											setTarea({
												...tarea,
												fecha_entrega: date.toLocaleDateString(options)
											});
											// console.log(date.toLocaleDateString(options));
											// console.log(date.getDate());
											// console.log(date.getMonth() + 1);
											// console.log(date.toLocaleDateString(options).split("/"));
										}}
										dateFormat={"dd MMMM yyyy"}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Cancelar
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => agregarTarea()}
							data-dismiss="modal">
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
