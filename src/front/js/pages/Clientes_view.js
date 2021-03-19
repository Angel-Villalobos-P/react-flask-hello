import React, { useState, useEffect, useContext } from "react";
import "../../styles/ClienteCard.scss";
import { Link } from "react-router-dom";
import ClienteCard from "../component/ClienteCard";
import { NewCostumer } from "../component/newCostumer";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const Clientes_view = () => {
	const { store, actions } = useContext(Context);

	const eliminar = dato => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!"
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire("Deleted!", "Your file has been deleted.", "success");
				// Eliminar de la base de datos
				console.log("eliminado: ", dato.id);
			} else {
				console.log("NO ELIMINADO");
			}
		});
	};

	const imprimir = cliente => {
		console.log(cliente.id);
	};

	return (
		<>
			<div className="view vh-100">
				<header className="page-header">
					<div className="container-fluid d-flex justify-content-between">
						<h2 className="no-margin-bottom titulo-dashboard">Clientes</h2>
						{process.env.BACKEND_URL}
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
														className="dropdown-item"
														data-toggle="modal"
														data-target="#form-nuevo-cliente"
														rel="nofollow">
														<i className="far fa-edit" />
														Editar
													</a>
													<a
														onClick={() => eliminar(item)}
														href="#"
														className="dropdown-item">
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
													<p className="card-text">{item.cedula_cliente}</p>
												</div>
											</div>
										</div>
										{/* <NewCostumer /> */}
									</div>
								);
							})}
					</div>
					<NewCostumer />
				</div>
			</div>
		</>
	);
};
