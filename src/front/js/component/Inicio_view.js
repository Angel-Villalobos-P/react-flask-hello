import React, { Component } from "react";

export const Inicio_view = () => (
	// <div className="row justify-content-around inicio-cards">
	// 	{/* Nombre del Cliente */}
	// 	<div className="col-12 text-white inicioBar d-flex justify-content-center pt-4">
	// 		<h1>Nombre del Cliente</h1>
	// 	</div>
	// 	{/* Horas Trabajadas */}
	// 	<div className="col-5 inicioCard cardTextTop">
	// 		<h1 className="text-white d-flex justify-content-center my-5">3:15</h1>
	// 		<h3 className="text-white d-flex justify-content-center my-5">Horas Trabajadas</h3>
	// 	</div>
	// 	{/* Cantidad de Clientes */}
	// 	<div className="col-5 inicioCard cardTextTop">
	// 		<h1 className="text-white d-flex justify-content-center my-5">6</h1>
	// 		<h3 className="text-white d-flex justify-content-center my-5">Clientes</h3>
	// 	</div>
	// 	{/* Proyectos Activos */}
	// 	<div className="col-5 inicioCard cardTextTop">
	// 		<h1 className="text-white d-flex justify-content-center my-5">7</h1>
	// 		<h3 className="text-white d-flex justify-content-center my-5">Proyectos Activos</h3>
	// 	</div>
	// 	{/* Proyectos Terminados */}
	// 	<div className="col-5 inicioCard cardTextTop">
	// 		<h1 className="text-white d-flex justify-content-center my-5">10</h1>
	// 		<h3 className="text-white d-flex justify-content-center my-5">Proyectos Terminados</h3>
	// 	</div>
	// </div>
	<div className="dashboard-counts no-padding-bottom">
		<div className="container-fluid">
			<div className="row">
				<div className="col-6">
					<div className="row bg-white has-shadow">
						<div className="col-xl-3 col-sm-6">
							<div className="item d-flex align-items-center">
								<div className="icon bg-violet">
									<i className="fas fa-th-large" />
								</div>
								<div className="title">
									<p>Proyectos activos</p>
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
						<div className="col-xl-3 col-sm-6">
							<div className="item d-flex align-items-center">
								<div className="icon bg-violet">
									<i className="fas fa-th-large" />
								</div>
								<div className="title">
									<p>Proyectos activos</p>
									<div className="progress">
										<div
											role="progressbar"
											style={{ width: "25%", height: "4px" }}
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
					</div>
				</div>
				<div className="col-6">
					<div className="row bg-white has-shadow">
						<div className="col-xl-3 col-sm-6">
							<div className="item d-flex align-items-center">
								<div className="icon bg-violet">
									<i className="fas fa-th-large" />
								</div>
								<div className="title">
									<span>Proyectos activos</span>
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
						<div className="col-xl-3 col-sm-6">
							<div className="item d-flex align-items-center">
								<div className="icon bg-violet">
									<i className="fas fa-th-large" />
								</div>
								<div className="title">
									<span>Proyectos activos</span>
									<div className="progress">
										<div
											role="progressbar"
											style={{ width: "25%", height: "4px" }}
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
					</div>
				</div>
			</div>
		</div>
	</div>
);
