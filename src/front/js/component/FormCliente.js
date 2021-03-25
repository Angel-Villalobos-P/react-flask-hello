import React, { useState, useEffect, useContext, Fragment } from "react";
import { Context } from "../store/appContext";

export const FormCliente = () => {
	const [datos, setDatos] = useState({
		cedula_cliente: "",
		nombre_cliente: "",
		correo_cliente: "",
		telefono_cliente: ""
	});

	const { store, actions } = useContext(Context);

	const handleChange = event => {
		// console.log(event.target.name);
		// console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
		// console.log("cliente a enviar: ", datos);
	};

	const enviarDatos = event => {
		event.preventDefault();
		actions.AddCliente(datos);
	};
	const _enviarDatos = () => {
		event.preventDefault();
		actions.AddCliente(datos);
	};

	const getInfoClienteApi = e => {
		const cliente = datos;
		if (e.key === "Enter") {
			fetch("https://apis.gometa.org/cedulas/" + datos.cedula_cliente)
				.then(response => response.json())
				.then(response => {
					console.log(response);
					console.log("Nombre completo: ", response.results[0].fullname);
					cliente.nombre_cliente = response.results[0].fullname;
					console.log("cliente local ", cliente);
					setDatos(cliente);
					console.log("cliente state ", datos);
				});
		}
	};

	return (
		<div>
			<div
				id="form-nuevo-cliente"
				className="modal fade"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				data-backdrop="false">
				<div className="modal-dialog modal-dialog-centered">
					<Fragment>
						<form className="modal-content">
							<div className="modal-header d-flex align-items-center">
								{/* <i className="fas fa-user userIcon" /> */}
								<i className="fas fa-user-plus" />
								<span />
								<h4 className="modal-title" id="exampleModalLabel">
									Nuevo Cliente
								</h4>
								<button type="button" className="close" aria-label="Close" data-dismiss="modal">
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
										// onKeyPress={getInfoClienteApi}
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
										value={datos.nombre_cliente}
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
								<button className="btn btn-primary" onClick={() => _enviarDatos()} data-dismiss="modal">
									Aceptar
								</button>
							</div>
						</form>
					</Fragment>
				</div>
			</div>
		</div>
	);
};
