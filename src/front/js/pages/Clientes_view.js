import React from "react";
import ClienteCard from "../component/ClienteCard";
import { NewCostumer } from "../component/newCostumer";

export const Clientes_view = () => {
	return (
		<>
			<div className="view vh-100">
				<header className="page-header">
					<div className="container-fluid d-flex justify-content-between">
						<h2 className="no-margin-bottom titulo-dashboard">Clientes</h2>
						{/* <NewCostumer /> */}
						<button
							id="btn-nuevo-cliente"
							type="button"
							href="#"
							className="btn btn-outline-dark"
							data-toggle="modal"
							data-target="#form-nuevo-cliente"
							rel="nofollow">
							+ Agregar cliente
						</button>
					</div>
				</header>
				<div className="container-fluid">
					<div className="row">
						<div className="col-auto">
							<ClienteCard />
						</div>
						<div className="col-auto">
							<ClienteCard />
						</div>
						<div className="col-auto ">
							<ClienteCard />
						</div>
						<div className="col-auto ">
							<ClienteCard />
						</div>
						<div className="col-auto ">
							<ClienteCard />
						</div>
						<div className="col-auto ">
							<ClienteCard />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
