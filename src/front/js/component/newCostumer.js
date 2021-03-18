import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";

export const NewCostumer = () => {
	const [datos, setDatos] = useState({
		cedula_cliente: "",
		nombre_cliente: "",
		correo_cliente: "",
		telefono_cliente: ""
	});

	const { store, actions } = useContext(Context);

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
			"enviando datos..." +
				datos.cedula_cliente +
				" " +
				datos.nombre_cliente +
				" " +
				datos.correo_cliente +
				" " +
				datos.telefono_cliente
		);
		console.log(datos);
		actions.AddCliente(datos);
	};

	return (
		<div>
			{/* <button
				id="btn-nuevo-cliente"
				type="button"
				className="btn btn-outline-dark"
				data-toggle="modal"
				data-target="#form-nuevo-cliente">
				<i className="fas fa-plus" />
				<span />
				Agregar cliente
			</button> */}
			<div
				className="modal fade"
				id="form-nuevo-cliente"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				data-backdrop="false">
				<div className="modal-dialog modal-dialog-centered">
					<fragment>
						<form className="modal-content" onSubmit={enviarDatos}>
							<div className="modal-header d-flex align-items-center">
								{/* <i className="fas fa-user userIcon" /> */}
								<i className="fas fa-user-plus" />
								<span />
								<h4 className="modal-title" id="exampleModalLabel">
									Nuevo Cliente
								</h4>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body newmodal">
								<div className="form-group">
									<label>Cedula</label>
									<input
										type="number"
										placeholder="Cedula"
										className="form-control"
										onChange={handleChange}
										name="cedula_cliente"
									/>
								</div>
								<div className="form-group">
									<label>Nombre</label>
									<input
										type="text"
										placeholder="Nombre"
										className="form-control"
										onChange={handleChange}
										name="nombre_cliente"
									/>
								</div>
								<div className="form-group">
									<label>Correo</label>
									<input
										type="email"
										placeholder="Correo"
										className="form-control"
										onChange={handleChange}
										name="correo_cliente"
									/>
								</div>
								<div className="form-group">
									<label>Teléfono</label>
									<input
										type="text"
										placeholder="Teléfono"
										className="form-control"
										onChange={handleChange}
										name="telefono_cliente"
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
		</div>
	);
};
