import React from "react";

export const UserName = () => {
	return (
		<div>
			<div className="modal fade" id="exampleModal7" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h3 className="modal-title" id="exampleModalLabel">
								Nombre de usuario
							</h3>
							<h5 className="modal-title" id="exampleModalLabel">
								example@gmail.com
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>

						<div className="modal-body">
							<p>ajuste de perfil</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
