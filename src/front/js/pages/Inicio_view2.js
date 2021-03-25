import React from "react";
import { Calendario } from "./Calendario";
import Agenda from "./Agenda";

export const Inicio_view2 = () => {
	return (
		<div className="view vh-100">
			<div className="dashboard-counts no-padding-bottom">
				<div className="container-fluid">
					<div className="row bg-white has-shadow">
						<div className="col-auto">
							<div className="item d-flex align-items-center">
								<div className="icon bg-violet">
									<i className="fas fa-th-large" />
								</div>
								<div className="title">
									<p>Proyectos terminados</p>
									<div className="progress">
										<div
											role="progressbar"
											style={{ width: "50%", height: "4px" }}
											aria-valuenow="50"
											aria-valuemin="0"
											aria-valuemax="100"
											className="progress-bar bg-violet"
										/>
									</div>
								</div>
								<div className="number">
									<strong>25</strong>
								</div>
							</div>
						</div>
						<div className="col-auto">
							<div className="item d-flex align-items-center">
								<div className="icon bg-violet">
									<i className="fas fa-th-large" />
								</div>
								<div className="title">
									<p>Proyectos pendientes</p>
									<div className="progress">
										<div
											role="progressbar"
											style={{ width: "25%", height: "4px" }}
											aria-valuenow="25"
											aria-valuemin="0"
											aria-valuemax="100"
											className="progress-bar bg-violet"
										/>
									</div>
								</div>
								<div className="number">
									<strong>25</strong>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Calendario />
			{/* <Agenda /> */}
		</div>
	);
};
