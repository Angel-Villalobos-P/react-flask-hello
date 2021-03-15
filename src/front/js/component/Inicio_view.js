import React, { Component } from "react";

export const Inicio_view = () => (
	<div className="row justify-content-around inicio-cards">
		{/* Nombre del Cliente */}
		<div className="col-12 text-white inicioBar d-flex justify-content-center pt-4">
			<h1>Nombre del Cliente</h1>
		</div>
		{/* Horas Trabajadas */}
		<div className="col-5 inicioCard cardTextTop">
			<h1 className="text-white d-flex justify-content-center my-5">3:15</h1>
			<h3 className="text-white d-flex justify-content-center my-5">Horas Trabajadas</h3>
		</div>
		{/* Cantidad de Clientes */}
		<div className="col-5 inicioCard cardTextTop">
			<h1 className="text-white d-flex justify-content-center my-5">6</h1>
			<h3 className="text-white d-flex justify-content-center my-5">Clientes</h3>
		</div>
		{/* Proyectos Activos */}
		<div className="col-5 inicioCard cardTextTop">
			<h1 className="text-white d-flex justify-content-center my-5">7</h1>
			<h3 className="text-white d-flex justify-content-center my-5">Proyectos Activos</h3>
		</div>
		{/* Proyectos Terminados */}
		<div className="col-5 inicioCard cardTextTop">
			<h1 className="text-white d-flex justify-content-center my-5">10</h1>
			<h3 className="text-white d-flex justify-content-center my-5">Proyectos Terminados</h3>
		</div>
	</div>
);
