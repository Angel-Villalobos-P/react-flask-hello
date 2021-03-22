import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../store/appContext";

export const FormProyecto = () => {
	const { store, actions } = useContext(Context);
	const [startDate, setStartDate] = useState(new Date());

	const [datos, setDatos] = useState({
		nombre_proyecto: "",
		descripcion_proyecto: "",
		fecha_entrega: new Date(),
		id_cliente: 1
	});

	const handleChange = event => {
		console.log(event.target.name);
		console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
		console.log("cliente a enviar: ", datos);
	};

	const enviarDatos = event => {
		event.preventDefault();
		console.log(
			"enviando datos..." + datos.nombre_proyecto + " " + datos.descripcion_proyecto + " " + datos.fecha_entrega
		);
		console.log(datos);
		actions.AddProyecto(datos);
	};

	return (
		<div
			className="modal fade"
			id="form-nuevo-proyecto"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			data-backdrop="false">
			<div className="modal-dialog modal-dialog-centered">
				<fragment>
					<form className="modal-content" onSubmit={enviarDatos}>
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
									name="nombre_proyecto"
									type="text"
									placeholder="Nombre del proyecto"
									className="form-control"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Cliente:</label>
								<select className="custom-select" id="inputGroupSelect01">
									<option selected>Eliga el cliente...</option>
									{!!store.clientes &&
										store.clientes.map((item, index) => {
											console.log(index);
											console.log(item.nombre_cliente);
											return <option key={index}>{item.nombre_cliente}</option>;
										})}
								</select>
							</div>
							<div className="form-group">
								<label>Descripción:</label>
								<textarea
									className="form-control"
									name="descripcion_proyecto"
									aria-label="With textarea"
									onChange={handleChange}
								/>
							</div>
							<div className="form-group">
								<label>Fecha de entrega:</label>
								<br />
								<DatePicker
									selected={startDate}
									onChange={handleChange}
									name="startDate"
									dateFormat="MM/dd/yyyy"
									// onChange={handleChange}
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cancelar
							</button>
							<button type="submit" className="btn btn-primary">
								Aceptar
							</button>
						</div>
					</form>
				</fragment>
			</div>
		</div>
	);
};
