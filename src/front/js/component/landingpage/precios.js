import React, { Component } from "react";

export const Precios = () => (
	<div className="row border-top border-dark my-5 py-5 d-flex justify-content-center">
		{/* Free Card */}
		<div className="col-3">
			<div className="card rounded base-card">
				<div className="card-body">
					<h5 className="card-title">Base</h5>
					<span className="price">Gratis</span>
					<h6 className="card-subtitle my-2">Uso Limitado</h6>
					<ul>
						<li>Feature 1</li>
						<li>Feature 2</li>
						<li>Feature 3</li>
						<li>Feature 4</li>
					</ul>
					<button type="button" className="btn premium-card-button">
						Seleccionar Plan
					</button>
				</div>
			</div>
		</div>
		{/* Premiun card */}
		<div className="col-3 d-flex card premium-card rounded text-white">
			<div className="card-body text-light">
				<h5 className="card-title">Premium</h5>
				<span className="price">$20</span>
				<span>/Mes</span>
				<h6 className="card-subtitle my-2">Uso Ilimitado!</h6>
				<ul>
					<li>Feature 1</li>
					<li>Feature 2</li>
					<li>Feature 3</li>
					<li>Feature 4</li>
					<li>Premium Feature 4</li>
					<li>Premium Feature 4</li>
					<li>Premium Feature 4</li>
				</ul>
				<button type="button" className="btn premium-card-button">
					Seleccionar Plan
				</button>
			</div>
		</div>
	</div>
);
