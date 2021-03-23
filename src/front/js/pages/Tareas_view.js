import React, { useState, useContext, useEffect } from "react";
import { TareaCard } from "../component/TareaCard";
import "../../styles/TareaCard.scss";
import { FormTarea } from "../component/FormTarea";
import { Context } from "../store/appContext";
import "../../styles/TareaCard.scss";
import Swal from "sweetalert2";
import { Timer } from "../component/Timer";
import DatePicker from "react-datepicker";

export const Tareas_view = () => {
	const { store, actions } = useContext(Context);
	const [startDate, setStartDate] = useState(new Date());

	// const tareas = [
	// 	{
	// 		fecha_entrega: "30/3/2021",
	// 		horas_totales: 6,
	// 		id: 4,
	// 		nombre_tarea: "Tarea de prueba 2",
	// 		timer_running: false,
	// 		totalHoras: "00:00:00",
	// 		horas: 0,
	// 		minutos: 0,
	// 		segundos: 0
	// 	},
	// 	{
	// 		fecha_entrega: "30/3/2021",
	// 		horas_totales: 6,
	// 		id: 4,
	// 		nombre_tarea: "Tarea de prueba 2",
	// 		timer_running: false,
	// 		totalHoras: "00:00:00",
	// 		horas: 0,
	// 		minutos: 0,
	// 		segundos: 0
	// 	}
	// ];

	// const iniciarTempo = tarea => {
	// 	const index = tareas.indexOf(tarea);
	// 	tareas[index].timer_running = !tareas[index].timer_running;
	// };

	// const [timer, setTimer] = useState(false);
	const [tareaEditada, setTareaEditada] = useState({});
	const [totalHoras, setTotalHoras] = useState("00:00:00");
	const [horas, setHoras] = useState(0);
	const [minutos, setMinutos] = useState(0);
	const [segundos, setSegundos] = useState(0);

	//La tarea cuyo temporizador está corriendo actualmente
	const [tareaActual, setTareaActual] = useState({});

	//Timer que controla el inicio y parada del temporizador para una tarea específica
	const [timer, setTimer] = useState({
		timer_running: false,
		id_tarea: 0
	});

	useEffect(
		() => {
			if (timer.timer_running) {
				const timeout = setTimeout(() => {
					setSegundos(segundos + 1);

					if (segundos > 59) {
						setMinutos(minutos + 1);
						setSegundos(0);
					}
					if (minutos > 59) {
						setHoras(horas + 1);
						setMinutos(0);
					}
					setTotalHoras(
						(horas < 10 ? "0" + horas : horas) +
							":" +
							(minutos < 10 ? "0" + minutos : minutos) +
							":" +
							(segundos < 10 ? "0" + segundos : segundos)
					);

					// setTime(date.toLocaleTimeString());
				}, 1000);
				return () => {
					clearTimeout(timeout);
				};
			}
		},
		[segundos, minutos, horas, timer.timer_running]
	);
	// useEffect(
	// 	() => {
	// 		if (timer) {
	// 			const timeout = setTimeout(() => {
	// 				setSegundos(segundos + 1);

	// 				if (segundos > 59) {
	// 					setMinutos(minutos + 1);
	// 					setSegundos(0);
	// 				}
	// 				if (minutos > 59) {
	// 					setHoras(horas + 1);
	// 					setMinutos(0);
	// 				}
	// 				setTotalHoras(
	// 					(horas < 10 ? "0" + horas : horas) +
	// 						":" +
	// 						(minutos < 10 ? "0" + minutos : minutos) +
	// 						":" +
	// 						(segundos < 10 ? "0" + segundos : segundos)
	// 				);

	// 				// setTime(date.toLocaleTimeString());
	// 			}, 1000);
	// 			return () => {
	// 				clearTimeout(timeout);
	// 			};
	// 		}
	// 	},
	// 	[segundos, minutos, horas, timer]
	// );

	const eliminar = _tarea => {
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
				actions.DeleteTarea(_tarea);
			}
		});
	};

	const changeHandler = e => {
		if (e.target.checked) {
			Swal.fire({
				icon: "success",
				title: "¡Tarea completada!",
				showConfirmButton: true,
				timer: 1500
			});
		}
	};

	const temporizador = tarea => {
		// setTimer({
		// 	timer_running: !timer.timer_running,
		// 	id_tarea: tarea.id
		// });
		console.log("tarea antigua ", tarea);
		if (Object.keys(tareaActual).length === 0) {
			setTareaActual(tarea);
		}
		console.log(timer.timer_running);
		setTimer({
			timer_running: !timer.timer_running,
			id_tarea: tarea.id
		});

		console.log(timer.timer_running);
		if (timer.timer_running) {
			setTareaActual({
				...tareaActual,
				horas_totales: totalHoras
			});

			actions.UpdateTarea(tareaActual);
			setTareaActual({});
			setTotalHoras("00:00:00");
			setHoras(0);
			setMinutos(0);
			setSegundos(0);
			console.log("tarea actual ", tareaActual);
		}
	};

	// const temporizador = () => {
	// 	setTimer(!timer);
	// };

	const editarTarea = () => {
		actions.UpdateTarea(tareaEditada);
	};

	const formatFecha = fecha => {
		var _fecha = fecha.split("/")[0];
		switch (fecha.split("/")[1]) {
			case "1":
				_fecha = _fecha + " ener";
				break;
			case "2":
				_fecha = _fecha + " feb";
				break;
			case "3":
				_fecha = _fecha + " mar";
				break;
			case "4":
				_fecha = _fecha + " abr";
				break;
			case "5":
				_fecha = _fecha + " may";
				break;
			case "6":
				_fecha = _fecha + " jun";
				break;
			case "7":
				_fecha = _fecha + " jul";
				break;
			case "8":
				_fecha = _fecha + " ago";
				break;
			case "9":
				_fecha = _fecha + " set";
				break;
			case "10":
				_fecha = _fecha + " oct";
				break;
			case "11":
				_fecha = _fecha + " nov";
				break;
			case "12":
				_fecha = _fecha + " dic";
				break;
			default:
				break;
		}
		return _fecha;
	};

	const handleChange = event => {
		setTareaEditada({
			...tareaEditada,
			[event.target.name]: event.target.value
		});
	};

	return (
		<>
			<div className="view vh-100">
				<header className="page-header">
					<div className="container-fluid d-flex justify-content-between">
						<h2 className="no-margin-bottom titulo-dashboard">Tareas</h2>
						{/* <NewCostumer /> */}
						<button
							id="btn-nuevo-cliente"
							type="button"
							href="#"
							className="btn btn-outline-dark"
							data-toggle="modal"
							data-target="#form-nueva-tarea"
							rel="nofollow">
							+ Agregar Tarea
						</button>
					</div>
				</header>
				<div className="container-fluid">
					<div className="row d-block">
						{!!store.tareas &&
							store.tareas.map((tarea, index) => {
								{
									/* {!!tareas &&
							tareas.map((tarea, index) => { */
								}
								return (
									<div key={index} className="tarea">
										<div className="row bg-white has-shadow">
											<div className="left-col col-lg-6 d-flex align-items-center justify-content-between">
												<div className="d-flex align-items-center">
													<div
														className="icon-play bg-violet"
														onClick={() => temporizador(tarea)}>
														{timer.timer_running && timer.id_tarea === tarea.id ? (
															<i className="fas fa-pause" />
														) : (
															<i className="fas fa-play" />
														)}
														{/* {timer ? (
															<i className="fas fa-pause" />
														) : (
															<i className="fas fa-play" />
														)} */}
													</div>
													<div className="tarea-title">
														<h3 className="h4">{tarea.nombre_tarea}</h3>
														{/* <Timer /> */}
														<div className="timer">
															<small className="d-flex">
																<i
																	className="far fa-calendar-alt"
																	style={{ marginRight: "4px" }}
																/>
																{formatFecha(tarea.fecha_entrega)}
																<i
																	className="far fa-clock"
																	style={{ marginRight: "4px", marginLeft: "10px" }}
																/>
																Temporizador{" "}
																{timer.id_tarea === tarea.id ? totalHoras : "00:00:00"}
																<a
																	className="item-editar-tarea"
																	href="#"
																	onClick={() => setTareaEditada(tarea)}
																	data-toggle="modal"
																	data-target="#form-editar-tarea"
																	rel="nofollow">
																	<i
																		className="far fa-edit"
																		style={{
																			marginRight: "4px",
																			marginLeft: "15px"
																		}}
																	/>
																	Editar
																</a>
																<a
																	className="item-eliminar-tarea"
																	href="#"
																	onClick={() => eliminar(tarea)}>
																	<i
																		className="far fa-trash-alt"
																		style={{
																			marginRight: "4px",
																			marginLeft: "15px"
																		}}
																	/>
																	Eliminar{" "}
																</a>
															</small>
														</div>
													</div>
												</div>
											</div>
											<div className="right-col col-lg-6 d-flex align-items-center justify-content-end">
												<div className="time">12:00 </div>
												<div className="form-check checkbox">
													<input
														className="form-check-input checkbox"
														type="checkbox"
														value=""
														id="flexCheckDefault"
														onChange={changeHandler}
													/>
													<label className="form-check-label" htmlFor="flexCheckDefault" />
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
					<FormTarea />
					<div
						className="modal fade"
						id="form-editar-tarea"
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
										<input
											type="text"
											placeholder="Nombre de la tarea"
											className="form-control"
											name="nombre_tarea"
											onChange={handleChange}
											value={tareaEditada.nombre_tarea}
										/>
									</div>
									<div className="form-group">
										<label>Proyecto:</label>
										<select
											className="custom-select"
											id="inputGroupSelect01"
											onChange={handleChange}
											name="id_proyecto">
											<option selected>Elija el proyecto...</option>
											{!!store.proyectos &&
												store.proyectos.map((proyecto, index) => {
													return (
														<option key={index} value={proyecto.id}>
															{proyecto.nombre_proyecto}
														</option>
													);
												})}
										</select>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-6">
												<label>Total horas:</label>
												<input
													className="form-control"
													aria-label="With textarea"
													onChange={handleChange}
													name="horas_totales"
													value={tareaEditada.horas_totales}
												/>
											</div>
											<div className="col-6">
												<label>Fecha de entrega:</label>
												<br />
												<DatePicker
													selected={startDate}
													onChange={date => {
														setStartDate(date);
														setTarea({
															...tarea,
															fecha_entrega: date.toLocaleDateString(options)
														});
														// console.log(date.toLocaleDateString(options));
														// console.log(date.getDate());
														// console.log(date.getMonth() + 1);
														// console.log(date.toLocaleDateString(options).split("/"));
													}}
													dateFormat={"dd MMMM yyyy"}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">
										Cancelar
									</button>
									<button
										type="button"
										className="btn btn-primary"
										onClick={() => editarTarea()}
										data-dismiss="modal">
										Aceptar
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
