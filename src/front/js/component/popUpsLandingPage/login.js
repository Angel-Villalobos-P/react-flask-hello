import React from "react";
import { Link } from "react-router-dom";
import { Recovery } from "./recovery";

export const Login = () => {
	return (
		<div>
			<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Iniciar sesión
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							Bienvenido a PlanificApp
							<hr />
							<div>
								<i className="fas fa-user userIcon" />
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend" />
								<input
									type="text"
									className="form-control"
									placeholder="email"
									aria-label="email"
									aria-describedby="basic-addon1"
								/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend" />
								<input
									type="text"
									className="form-control"
									placeholder="contraseña"
									aria-label="contraseña"
									aria-describedby="basic-addon1"
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cancelar
							</button>
							<button type="button" className="btn btn-primary">
								Iniciar
							</button>
							{/* <Link to="/recovery"> ¿Olvidó su contraseña? </Link> */}
							<Recovery />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
