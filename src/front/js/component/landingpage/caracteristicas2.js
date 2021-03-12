import React, { Component } from "react";

export const Caracteristicas2 = () => (
	<div className="row border-top border-dark my-5 py-5">
		{/* Primera Carta */}
		<div className="row d-flex justify-content-between">
			<div className="col-4">
				<div className="card base-card">
					<div className="card-body">
						<i className="fas fa-mobile-alt fa-3x" />
						<h5 className="card-title my-2">Fácil Uso</h5>
						<p className="card-text">Maneja tus proyectos, tareas y clientes fácilmente</p>
						<a href="#" className="btn btn-primary">
							Más Información
						</a>
					</div>
				</div>
			</div>
			{/* Segunda Carta */}
			<div className="col-4">
				<div className="card base-card">
					<div className="card-body">
						<i className="fas fa-user-clock fa-3x" />
						<h5 className="card-title my-2">Manejo de tiempo</h5>
						<p className="card-text">Inicia y detiene el tiempo trabajado con un botón</p>
						<a href="#" className="btn btn-primary">
							Más Información
						</a>
					</div>
				</div>
			</div>
			{/* Tercera Carta */}
			<div className="col-4">
				<div className="card base-card">
					<div className="card-body">
						<i className="fas fa-smile fa-3x" />
						<h5 className="card-title my-2">Control Total</h5>
						<p className="card-text">Para mantener orden y comodidad con nuestra aplicación</p>
						<a href="#" className="btn btn-primary">
							Más Información
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
);
