import React from "react";

export function ProyectCards() {
	return (
		<div id="proyecto-card" className="card border-primary mb-3">
			<div className="card-header">
				<h5>Nombre del proyecto</h5>
			</div>
			<div className="row d-flex justify-content-center ">
				<div className="col-8">
					<div className="card-body text-primary">
						<p>Neque per quisquam est qui dolorem ipsum quia dolor</p>

						<div className="d-flex justify-content-center mr-3 ">
							<div className="row ">
								<i className="fas fa-clipboard-list mr-5 mt-4 proIcon" />
								<i className="far fa-calendar-alt mr-5 mt-4 proIcon" />
								<i className="far fa-clock mr-5 mt-4 proIcon" />
								<i className="fas fa-user mr-5 mt-4 proIcon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
