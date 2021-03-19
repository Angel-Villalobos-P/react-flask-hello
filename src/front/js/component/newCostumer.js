import React from "react";

export const NewCostumer = () => {
	return (
		<div>
			<div
				className="modal fade"
				id="form-nuevo-cliente"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				data-backdrop="false">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header d-flex align-items-center">
							<i className="fas fa-user-plus" />
							<span />
							<h4 className="modal-title" id="exampleModalLabel">
								Nuevo Cliente
							</h4>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body newmodal">
							<div className="form-group">
								<label>Cedula</label>
								<input type="email" placeholder="Cedula" className="form-control" />
							</div>
							<div className="form-group">
								<label>Nombre</label>
								<input type="email" placeholder="Nombre" className="form-control" />
							</div>
							<div className="form-group">
								<label>correo</label>
								<input type="email" placeholder="Correo" className="form-control" />
							</div>
							<div className="form-group">
								<label>Teléfono</label>
								<input type="email" placeholder="Teléfono" className="form-control" />
							</div>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Cancelar
							</button>
							<button type="button" className="btn btn-primary">
								Aceptar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
