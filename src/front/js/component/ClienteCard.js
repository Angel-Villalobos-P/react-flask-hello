import React from "react";
import "../../styles/ClienteCard.scss";
import { Link } from "react-router-dom";
import { NewCostumer } from "./newCostumer";
import Swal from "sweetalert2";

const ClienteCard = () => {
	const eliminar = dato => {
		Swal.fire({
			title: "¿Está seguro?",
			text: "No se podrá recuperar",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Sí, borrar"
		}).then(result => {
			if (result.isConfirmed) {
				//Swal.fire("Deleted!", "Your file has been deleted.", "success");
				// Eliminar de la base de datos
			}
		});
	};

	return (
		<div id="cliente-card" className="card border-primary has-shadow">
			<div className="card-header">
				<Link to="/">
					<h5 className="nombre-cliente">Nombre del cliente</h5>
				</Link>
			</div>
			<div className="card-menu">
				<div className="dropdown">
					<button
						type="button"
						id="menuCard"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
						className="dropdown-toggle">
						<i className="fa fa-ellipsis-v" />
					</button>
					<div aria-labelledby="menuCard" className="dropdown-menu dropdown-menu-right has-shadow">
						<a
							href="#"
							className="dropdown-item"
							data-toggle="modal"
							data-target="#form-nuevo-cliente"
							rel="nofollow">
							{/* {" "} */}
							<i className="far fa-edit" />
							Editar
						</a>
						<a href="#" className="dropdown-item" onClick={() => eliminar("dato")}>
							{/* {" "} */}
							{/* <i className="fa fa-times" /> */}
							<i className="far fa-trash-alt" />
							Eliminar
						</a>
					</div>
				</div>
			</div>
			<div className="row d-flex justify-content-center">
				<div className="col-4">
					<img className="rounded float-left" src="https://picsum.photos/100/100" />
					{/* <img className="img-fluid rounded-circle float-left" src="https://picsum.photos/100/100" /> */}
				</div>
				<div className="col-8">
					<div className="card-body text-primary">
						{/* <h5 className="card-title">Primary card title</h5> */}
						<p className="card-text">correo@gmail.com</p>
						<p className="card-text">+506 88888888</p>
					</div>
				</div>
			</div>
			<NewCostumer />
		</div>
	);
};

export default ClienteCard;
