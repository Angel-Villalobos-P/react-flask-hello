import React from "react";

export const CaracteristicasTareas = () => (
	<div className="row border-top border-dark my-5 py-5 d-flex justify-content-between">
		<div className="col-4">
			<img src="https://picsum.photos/400/200" alt="..." className="img-thumbnail" />
		</div>
		<div className="col-6">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Tareas</h5>
					<h6 className="card-subtitle mb-2 text-muted">Seguimiento de clientes</h6>
					<p className="card-text">
						Puedes crear tantas tareas como necesites para organizar los proyectos mejor, y darle
						seguimiento al tiempo que te toma completarlas
					</p>
					<button type="button" className="btn btn-primary">
						Leer Más!
					</button>
				</div>
			</div>
		</div>
	</div>
);
