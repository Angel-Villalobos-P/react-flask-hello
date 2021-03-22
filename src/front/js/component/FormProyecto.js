import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormProyecto = () => {
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
								<option value="1">Cliente 1</option>
								<option value="2">Cliente 2</option>
								<option value="3">Cliente 3</option>
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
