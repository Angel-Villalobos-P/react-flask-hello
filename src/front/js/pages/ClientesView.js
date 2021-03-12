import React, { useState, useEffect } from "react";
import ClienteCard from "../component/ClienteCard";
import Sidebar from "../component/Sidebar";
import { NewCostumer } from "../component/newCostumer";

const ClientesView = () => {
	//Acá se obtienen todos los clientes y se renderiza un card por cada uno
	//Usar global state

	const [clientes, setClientes] = useState([]);

	useEffect(() => {
		var _clientes = [];

		for (var i = 0; i < 3; i++) {
			_clientes.push({
				nombre: "Nombre del cliente",
				correo: "correo@gmail.com",
				telefono: "+506 88888888"
			});
		}
		setClientes(_clientes);
	}, []);

	return (
		<>
			<Sidebar />
			<div className="container h-100">
				<div className="row">
					<div className="col">
						<div id="search-bar" className="input-group d-flex flex-row justify-content-end">
							<div className="form-outline">
								<input type="search" id="form" className="form-control" placeholder="Buscar" />
							</div>
							<button type="button" className="btn btn-primary">
								<i className="fas fa-search" />
							</button>
							<NewCostumer />
						</div>
					</div>
				</div>
				<div className="row border">
					{/* <div className="col-auto border d-flex flex-row"> */}
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
				{/* {clientes.map((cliente, i) => {
				return <ClienteCard key={i} clientes={cliente} />;
			})} */}
			</div>
		</>
	);
};

export default ClientesView;
