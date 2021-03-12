import React from "react";

export const Caracteristicas1 = () => (
	<div className="row border-top border-dark my-5 py-5 d-flex justify-content-between">
		<div className="col-4">
			<img src="https://picsum.photos/400/200" alt="..." className="img-thumbnail" />
		</div>
		<div className="col-6">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Características</h5>
					<h6 className="card-subtitle mb-2 text-muted">Ejemplo de característica</h6>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content
						Some quick example text to build on the card title and make up the bulk of the cards content
					</p>
					<button type="button" className="btn btn-primary">
						Leer Más!
					</button>
				</div>
			</div>
		</div>
	</div>
);
