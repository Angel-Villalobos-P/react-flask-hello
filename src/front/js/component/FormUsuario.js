import React from "react";

export const FormUsuario = () => {
	return (
		<div
			id="form-usuario"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			className="modal fade text-left">
			<div role="document" className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<img
							src="https://picsum.photos/100/100"
							alt="..."
							className="img-fluid rounded-circle avatar"
						/>
						<span />
						<h4 id="exampleModalLabel" className="modal-title">
							User name
						</h4>
						<button type="button" data-dismiss="modal" aria-label="Close" className="close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label>Nombre</label>
								<input type="email" placeholder="Nombre" className="form-control" />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" placeholder="Email" className="form-control" />
							</div>
							<h6 className="cambiar-password">Cambiar contraseña</h6>
							<div className="linea" />
							<div className="form-group">
								<label>Actual</label>
								<input type="password" placeholder="Contraseña actual" className="form-control" />
							</div>
							<div className="form-group">
								<label>Nueva</label>
								<input type="password" placeholder="Contraseña nueva" className="form-control" />
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" data-dismiss="modal" className="btn btn-secondary">
							Cancelar
						</button>
						<button type="button" className="btn btn-primary">
							Guardar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
