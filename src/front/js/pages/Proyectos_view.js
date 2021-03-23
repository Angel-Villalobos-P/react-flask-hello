import React, { useState, useContext } from "react";
import { ProyectCards } from "../component/proyectCards";
import { ProyectoCard } from "../component/ProyectoCard";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/ProyectoCard.scss";
import Swal from "sweetalert2";
import { FormProyecto } from "../component/FormProyecto";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Proyectos_view = () => {
	const { store, actions } = useContext(Context);
	const [proyectoEditado, setProyectoEditado] = useState({});
	const [startDate, setStartDate] = useState(new Date());

	const eliminar = proyecto => {
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
				actions.DeleteProyecto(proyecto);
			}
		});
	};

	const editar = () => {
		actions.UpdateProyecto(proyectoEditado);
	};

	const handleChange = event => {
		setProyectoEditado({
			...proyectoEditado,
			[event.target.name]: event.target.value
		});
	};

	return (
		<>
			<div className="view vh-100">
				<header className="page-header">
					<div className="container-fluid d-flex justify-content-between">
						<h2 className="no-margin-bottom titulo-dashboard">Proyectos</h2>
						<button
							id="btn-nuevo-proyecto"
							type="button"
							href="#"
							className="btn btn-outline-dark"
							data-toggle="modal"
							data-target="#form-nuevo-proyecto"
							rel="nofollow">
							+ Agregar proyecto
						</button>
					</div>
				</header>
				<div className="container-fluid">
					<div className="row">
						{!!store.proyectos &&
							store.proyectos.map((proyecto, index) => {
								return (
									<div id="proyecto-card" key={index} className="card border-primary has-shadow">
										<div className="card-header">
											<Link to="/">
												<h5 className="nombre-cliente">{proyecto.nombre_proyecto}</h5>
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
														onClick={() => setProyectoEditado(proyecto)}
														className="dropdown-item"
														data-toggle="modal"
														data-target="#form-editar-proyecto"
														rel="nofollow">
														<i className="far fa-edit" />
														Editar
													</a>
													<a
														href="#"
														className="dropdown-item"
														onClick={() => setProyectoEditado(proyecto)}>
														<i className="far fa-trash-alt" />
														Eliminar
													</a>
												</div>
											</div>
										</div>
										<div className="row d-flex justify-content-center ">
											<div className="card-body text-primary">
												<p className="card-text">{proyecto.descripcion_proyecto}</p>
												<div className="d-flex justify-content-center">
													<div className="row ">
														<small className="card-text">
															<i
																className="fas fa-check-double"
																style={{ marginRight: "2px" }}
															/>
															4/5
															<i
																className="far fa-calendar-alt"
																style={{ marginRight: "2px", marginLeft: "15px" }}
															/>
															16 de mar
															<i
																className="far fa-clock"
																style={{ marginRight: "2px", marginLeft: "15px" }}
															/>
															4:00
															<i
																className="fas fa-user"
																style={{ marginRight: "2px", marginLeft: "15px" }}
															/>
															Cliente nombre
														</small>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
					<FormProyecto />
					<div
						className="modal fade"
						id="form-editar-proyecto"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
						data-backdrop="false">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header d-flex align-items-center">
									<i className="fas fa-tasks" />
									<span />
									<h4 className="modal-title" id="exampleModalLabel">
										Editar proyecto
									</h4>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body newmodal">
									<div className="form-group">
										<label>Nombre del proyecto:</label>
										<input
											type="email"
											placeholder="Nombre del proyecto"
											className="form-control"
											onChange={handleChange}
											name="nombre_proyecto"
											value={proyectoEditado.nombre_proyecto}
										/>
									</div>
									<div className="form-group">
										<label>Cliente:</label>
										<select
											className="custom-select"
											id="clienteSeleccionado"
											onChange={handleChange}
											name="id_cliente"
											// value={proyectoEditado.nombre_proyecto}
										>
											<option selected>Elija el cliente...</option>
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
											value={proyectoEditado.descripcion_proyecto}
										/>
									</div>
									<div className="form-group">
										<label>Fecha de entrega:</label>
										<br />
										<DatePicker
											selected={startDate}
											onChange={date => setStartDate(date)}
											// onChange={handleChange}
											dateFormat={"dd MMMM"}
											// name="fecha_entrega"
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
										onClick={() => editar()}
										data-dismiss="modal">
										Aceptar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
