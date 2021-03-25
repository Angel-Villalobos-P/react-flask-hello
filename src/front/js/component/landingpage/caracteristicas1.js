import React from "react";
import clientesUrl from "../../../img/clientes.png";

export const Caracteristicas1 = () => (
	<div className="row border-top border-dark my-5 py-5 d-flex justify-content-between">
		<div className="col-4">
			<img src={clientesUrl} alt="..." className="img-thumbnail" />
		</div>
		<div className="col-6">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Clientes</h5>
					<h6 className="card-subtitle mb-2 text-muted">Registro de clientes</h6>
					<p className="card-text">
						Puedes registrar los clientes con los que trabajas y tener a mano la información de contacto de
						todos tus clientes
					</p>
					<button type="button" className="btn btn-primary">
						Leer Más!
					</button>
				</div>
			</div>
		</div>
	</div>
);
