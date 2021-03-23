import React, { useState, useEffect, useContext, Fragment } from "react";
import "../../styles/ClienteCard.scss";
import { Link } from "react-router-dom";
import ClienteCard from "../component/ClienteCard";
import { FormCliente } from "../component/FormCliente";
import { UpdateCustomer } from "../component/updateCustomer";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const Clientes_view = () => {
	const { store, actions } = useContext(Context);

	const [clienteEditado, setClienteEditado] = useState({});
	const [editando, setEditando] = useState(false);

	const eliminar = dato => {
		Swal.fire({
			title: "¿Está seguro?",
			text: "¡No se puede revertir!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, eliminar"
		}).then(result => {
			if (result.isConfirmed) {
				//Swal.fire("Deleted!", "Your file has been deleted.", "success");
				// Eliminar de la base de datos
				console.log("eliminado: ", dato.id);
				actions.DeleteCliente(dato);
			}
		});
	};

	const editar = () => {
		actions.UpdateCliente(clienteEditado);
	};

	const handleChange = event => {
		setClienteEditado({
			...clienteEditado,
			[event.target.name]: event.target.value
		});
	};

	return (
		<>
			<div className="view vh-100">
				<header className="page-header">
					<div className="container-fluid d-flex justify-content-between">
						<h2 className="no-margin-bottom titulo-dashboard">Clientes</h2>
						<FormCliente />
						<button
							id="btn-nuevo-cliente"
							type="button"
							href="#"
							className="btn btn-outline-dark"
							data-toggle="modal"
							data-target="#form-nuevo-cliente"
							rel="nofollow">
							+ Agregar cliente
						</button>
					</div>
				</header>

				{/* CARTA */}
				<div className="container-fluid">
					<div className="row">
						{!!store.clientes &&
							store.clientes.map((item, index) => {
								return (
									<div key={index} id="cliente-card" className="card border-primary has-shadow mx-2">
										<div className="card-header">
											<Link to="/">
												<h5 className="nombre-cliente">{item.nombre_cliente}</h5>
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
												<div
													aria-labelledby="menuCard"
													className="dropdown-menu dropdown-menu-right has-shadow">
													<a
														href="#"
														onClick={() => setClienteEditado(item)}
														className="dropdown-item"
														data-toggle="modal"
														data-target="#form-editar-cliente"
														rel="nofollow">
														<i className="far fa-edit" />
														Editar
													</a>
													<a
														href="#"
														className="dropdown-item"
														onClick={() => eliminar(item)}>
														<i className="far fa-trash-alt" />
														Eliminar
													</a>
												</div>
											</div>
										</div>
										<div className="row d-flex justify-content-center">
											<div className="col-4">
												<img
													className="rounded float-left"
													src="https://picsum.photos/100/100"
												/>
											</div>
											<div className="col-8">
												<div className="card-body text-primary">
													<p className="card-text">{item.correo_cliente}</p>
													<p className="card-text">{item.telefono_cliente}</p>
												</div>
											</div>
										</div>
										{/* <NewCostumer /> */}
									</div>
								);
							})}
					</div>
					<FormCliente />
					{/* form de editar*/}
					<div
						id="form-editar-cliente"
						className="modal fade"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
						data-backdrop="false">
						<div className="modal-dialog modal-dialog-centered">
							<Fragment>
								<form className="modal-content" onSubmit={editar}>
									<div className="modal-header d-flex align-items-center">
										{/* <i className="fas fa-user userIcon" /> */}
										<i className="fas fa-user-plus" />
										<span />
										<h4 className="modal-title" id="exampleModalLabel">
											Editar Cliente
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
												value={clienteEditado.cedula_cliente}
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
												value={clienteEditado.nombre_cliente}
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
												value={clienteEditado.correo_cliente}
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
												value={clienteEditado.telefono_cliente}
											/>
										</div>
									</div>
									<div className="modal-footer">
										<button type="button" className="btn btn-secondary" data-dismiss="modal">
											Cancelar
										</button>
										<button
											className="btn btn-primary"
											onClick={() => editar()}
											data-dismiss="modal">
											Aceptar
										</button>
									</div>
								</form>
							</Fragment>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
