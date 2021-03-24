import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handlerVerify = e => {
		e.preventDefault();
		if (email === "" || password === "") {
			alert("correo y password son requeridos");
		}

		const data = { email: email, password: password };

		fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				if (data.successful) {
					sessionStorage.setItem("u_token", data.token);
					setRedirect(true);
				}
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				Iniciar sesión
			</button>
			<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Iniciar sesión
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							Bienvenido a PlanificApp
							<hr />
							<div>
								<i className="fas fa-user userIcon" />
							</div>
							<form onSubmit={e => handlerVerify(e)}>
								<div className="input-group mb-3">
									<div className="input-group-prepend" />
									<input
										type="text"
										className="form-control"
										placeholder="email"
										aria-label="email"
										aria-describedby="basic-addon1"
										onChange={e => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="input-group mb-3">
									<div className="input-group-prepend" />
									<input
										type="password"
										className="form-control"
										placeholder="password"
										aria-label="password"
										aria-describedby="basic-addon1"
										onChange={e => setPassword(e.target.value)}
										required
									/>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">
										Cancelar
									</button>
									<button className="btn btn-primary" onClick={handlerVerify} data-dismiss="modal">
										Iniciar
									</button>
								</div>
							</form>
							{redirect ? <Redirect to="/inicio" /> : ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
