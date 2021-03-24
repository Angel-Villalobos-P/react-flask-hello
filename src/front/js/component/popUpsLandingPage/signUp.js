import React, { useState } from "react";
import { WelcomeMessage } from "./welcomeMessage";

export const SignUp = () => {
	const [nombreUsuario, setNombreUsuario] = useState("");
	const [password, setPassword] = useState("");
	const [nombreProfesional, setNombreProfesional] = useState("");
	const [profesion, setProfesion] = useState("");
	const [numeroCedula, setNumeroCedula] = useState("");
	const [correoTrabajo, setCorreoTrabajo] = useState("");
	const [signUpSuccessful, setSignUpSuccessful] = useState(false);

	const handlerSubmit = e => {
		e.preventDefault();
		if (
			nombreUsuario === "" ||
			password === "" ||
			nombreProfesional === "" ||
			profesion === "" ||
			numeroCedula === "" ||
			correoTrabajo === ""
		) {
			alert("datos requeridos para su registro");
			return;
		} else {
			setSignUpSuccessful(true);
		}

		//Fetch Profesional

		const data = {
			nombreDeUsuario: nombreUsuario,
			password: password,
			nombreDeProfesional: nombreProfesional,
			profesion: profesion,
			numerodecedula: numeroCedula,
			correodeltrabajador: correoTrabajo
		};

		fetch(process.env.BACKEND_URL + "/api/profesional", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Resultado", data);
			})
			.catch(error => {
				console.error("Error", error);
			});
	};

	return (
		<div>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modal8">
				Registrarse
			</button>
			<div
				id="modal8"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				className="modal fade text-left">
				<div role="document" className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 id="exampleModalLabel" className="modal-title">
								Registro del profesional
							</h4>
							<button type="button" data-dismiss="modal" aria-label="Close" className="close">
								<span aria-hidden="true">×</span>
							</button>
						</div>

						<hr />
						<div className="modal-body">
							Bienvenido a PlanificApp
							<hr />
							{signUpSuccessful ? (
								<WelcomeMessage />
							) : (
								<form onSubmit={e => handlerSubmit(e)}>
									<div className="form-group">
										<label>Nombre de usuario</label>
										<input
											type="text"
											placeholder="Nombre de usuario"
											className="form-control"
											onChange={e => setNombreUsuario(e.target.value)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Contraseña</label>
										<input
											type="password"
											placeholder="contraseña"
											className="form-control"
											onChange={e => setPassword(e.target.value)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Nombre del profesional</label>
										<input
											type="text"
											placeholder="Nombre"
											className="form-control"
											onChange={e => setNombreProfesional(e.target.value)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Profesión</label>
										<input
											type="text"
											placeholder="profesión"
											className="form-control"
											onChange={e => setProfesion(e.target.value)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Numero de cedula</label>
										<input
											type="number"
											placeholder="numero de cedula"
											className="form-control"
											onChange={e => setNumeroCedula(e.target.value)}
											required
										/>
									</div>
									<div className="form-group">
										<label>Correo del trabajo</label>
										<input
											type="text"
											placeholder="example@"
											className="form-control"
											onChange={e => setCorreoTrabajo(e.target.value)}
											required
										/>
									</div>
									<div className="modal-footer">
										<button type="button" data-dismiss="modal" className="btn btn-secondary">
											Cancelar
										</button>
										<button
											onClick={handlerSubmit}
											className="btn btn-primary"
											value="SignUp"
											data-dismiss="modal">
											Guardar
										</button>
									</div>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
