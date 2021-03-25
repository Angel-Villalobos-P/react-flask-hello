import React from "react";

export const CaracteristicaProyecto = () => (
	<div className="row border-top border-dark my-5 py-5 d-flex justify-content-between">
		<div className="col-4">
			<img src="https://picsum.photos/400/200" alt="..." className="img-thumbnail" />
		</div>
		<div className="col-6">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Proyectos</h5>
					<h6 className="card-subtitle mb-2 text-muted">Registro de proyectos</h6>
					<p className="card-text">
						Puedes registrar todos los proyectos en los que estás trabajando y darle seguimiento a la
						división de tareas para una mayor organización
					</p>
					<button type="button" className="btn btn-primary">
						Leer Más!
					</button>
				</div>
			</div>
		</div>
	</div>
);
