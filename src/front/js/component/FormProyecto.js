import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../store/appContext";

export const FormProyecto = () => {
	const { store, actions } = useContext(Context);
	const [startDate, setStartDate] = useState(new Date());
	const [id, setId] = useState(0);
	const [proyecto, setProyecto] = useState({
		id_cliente: 0,
		nombre_proyecto: "",
		descripcion_proyecto: "",
		fecha_entrega: new Date(),
		horas_totales: 0
	});

	const agregarProyecto = () => {
		actions.AddProyecto(proyecto);
		console.log(proyecto);
	};

	const handleChange = event => {
		setProyecto({
			...proyecto,
			[event.target.name]: event.target.value
		});
	};

	return (
		<div
			className="modal fade"
			id="form-nuevo-proyecto"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			data-backdrop="false">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header d-flex align-items-center">
						<i className="fas fa-tasks" />
						<span />
						<h4 className="modal-title" id="exampleModalLabel">
							Nuevo proyecto
						</h4>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body newmodal">
						<div className="form-group">
							<label>Nombre del proyecto:</label>
							<input
								type="text"
								placeholder="Nombre del proyecto"
								className="form-control"
								onChange={handleChange}
								name="nombre_proyecto"
							/>
						</div>
						<div className="form-group">
							<label>Cliente:</label>
							<select
								className="custom-select"
								id="clienteSeleccionado"
								onChange={handleChange}
								name="id_cliente">
								<option selected>Eliga el cliente...</option>
								{!!store.clientes &&
									store.clientes.map((cliente, index) => {
										return (
											<option key={index} value={cliente.id}>
												{cliente.nombre_cliente}
											</option>
										);
									})}
							</select>
						</div>
						<div className="form-group">
							<label>Descripción:</label>
							<textarea
								className="form-control"
								aria-label="With textarea"
								onChange={handleChange}
								name="descripcion_proyecto"
							/>
						</div>
						<div className="form-group">
							<label>Fecha de entrega:</label>
							<br />
							<DatePicker
								onChange={date => setStartDate(date)}
								// dateFormat={"dd MMMM"}
								selected={startDate}
								// onChange={handleChange}
								dateFormat="MM/dd/yyyy"
								name="startDate"
							/>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Cancelar
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={() => agregarProyecto()}
							data-dismiss="modal">
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
