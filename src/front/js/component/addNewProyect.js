import React from "react";
import { Link } from "react-router-dom";

export const AddProyect = () => {
	return (
		<>
			<button id="btn" type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal5">
				Agregar proyecto
			</button>
			<div className="modal fade" id="exampleModal5" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Nuevo proyecto
							</h5>
							<div>
								<i className="fas fa-project-diagram hello" />
							</div>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="column mt-2">
							<div className="modal-body">
								<div className="column-3 ">
									<div className="row">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">Nombre</span>
											</div>
											<input
												type="text"
												aria-label="Nombre"
												className="form-control"
												placeholder="Nombre"
											/>
										</div>
									</div>
								</div>
								<div className="column-3 m-3">
									<div className="row">
										<div className="input-group">
											<div className="input-group-prepend">
												<label className="input-group-text">Clientes</label>
											</div>
											<select className="custom-select" id="inputGroupSelect01">
												<option selected>Eliga el cliente...</option>
												<option value="1">Cliente 1</option>
												<option value="2">Cliente 2</option>
												<option value="3">Cliente 3</option>
											</select>
										</div>
									</div>
								</div>
								<div className="column-3">
									<div className="row">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text">Descripción</span>
											</div>
											<textarea className="form-control" aria-label="With textarea" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<Link to="/proyectos">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Cancelar
								</button>
							</Link>
							<button type="button" className="btn btn-primary">
								Guardar
							</button>
							<button type="button" className="btn btn-primary">
								Eliminar
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
