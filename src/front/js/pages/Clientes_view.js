import React from "react";
import ClienteCard from "../component/ClienteCard";
import { NewCostumer } from "../component/newCostumer";

export const Clientes_view = () => {
	// const eliminar = (dato) => {
	//     Swal.fire({
	//         title: 'Are you sure?',
	//         text: "You won't be able to revert this!",
	//         icon: 'warning',
	//         showCancelButton: true,
	//         confirmButtonColor: '#3085d6',
	//         cancelButtonColor: '#d33',
	//         confirmButtonText: 'Yes, delete it!'
	//     }).then((result) => {
	//         if (result.isConfirmed) {
	//             Swal.fire(
	//                 'Deleted!',
	//                 'Your file has been deleted.',
	//                 'success'
	//             );
	//             // Eliminar de la base de datos
	//         }
	//     });
	// };

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
