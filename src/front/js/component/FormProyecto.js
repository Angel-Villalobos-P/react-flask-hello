import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../store/appContext";

export const FormProyecto = () => {
	const { store, actions } = useContext(Context);
	const [startDate, setStartDate] = useState(new Date());

	return (
		<div
			className="modal fade"
			id="form-nuevo-proyecto"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			data-backdrop="false">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header d-flex align-items-center">
						<i className="fas fa-tasks" />
						<span />
						<h4 className="modal-title" id="exampleModalLabel">
							Nuevo proyecto
						</h4>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body newmodal">
						<div className="form-group">
							<label>Nombre del proyecto:</label>
							<input type="email" placeholder="Nombre del proyecto" className="form-control" />
						</div>
						<div className="form-group">
							<label>Cliente:</label>
							<select className="custom-select" id="inputGroupSelect01">
								<option selected>Eliga el cliente...</option>
								{!!store.clientes &&
									store.clientes.map((item, index) => {
										console.log(index);
										console.log(item.nombre_cliente);
										return <option key={index} value={item.nombre_cliente} />;
									})}
							</select>
						</div>
						<div className="form-group">
							<label>Descripción:</label>
							<textarea className="form-control" aria-label="With textarea" />
						</div>
						<div className="form-group">
							<label>Fecha de entrega:</label>
							<br />
							<DatePicker
								selected={startDate}
								onChange={date => setStartDate(date)}
								dateFormat={"dd MMMM"}
							/>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Cancelar
						</button>
						<button type="button" className="btn btn-primary">
							Aceptar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
