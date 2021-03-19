import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormTarea = () => {
	const [startDate, setStartDate] = useState(new Date());

	return (
		<div
			className="modal fade"
			id="form-nueva-tarea"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			data-backdrop="false">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header d-flex align-items-center">
						<i className="fas fa-tasks" />
						<span />
						<h4 className="modal-title" id="exampleModalLabel">
							Tarea
						</h4>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body newmodal">
						<div className="form-group">
							<label>Nombre de la tarea:</label>
							<input type="email" placeholder="Nombre de la tarea" className="form-control" />
						</div>
						<div className="form-group">
							<label>Proyecto:</label>
							<select className="custom-select" id="inputGroupSelect01">
								<option selected>Eliga el proyecto...</option>
								<option value="1">Proyecto 1</option>
								<option value="2">Proyecto 2</option>
								<option value="3">Proyecto 3</option>
							</select>
						</div>
						{/* <div className="form-group">
							<label>Total horas:</label>
							<input className="form-control" aria-label="With textarea" />
						</div> */}
						<div className="form-group">
							<div className="row">
								<div className="col-6">
									<label>Total horas:</label>
									<input className="form-control" aria-label="With textarea" />
								</div>
								<div className="col-6">
									<label>Fecha de entrega:</label>
									<br />
									<DatePicker
										selected={startDate}
										onChange={date => setStartDate(date)}
										dateFormat={"dd MMMM"}
									/>
								</div>
							</div>
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
