const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			timer: true,
			message: null,
			clientes: [],
			clientesDetails: null,
			proyectos: [],
			tareas: [],
			clienteActual: null,
			proyectoActual: null,
			profesional: null
		},

		actions: {
			loadProfesional: () => {
				fetch(process.env.BACKEND_URL + "/api/profesional")
					.then(response => response.json())
					.then(response => {
						setStore({ profesional: [...response] });
					});
			},
			setClienteActual: cliente => {
				setStore({ clienteActual: cliente });
			},
			setProyectoActual: proyecto => {
				setStore({ proyectoActual: proyecto });
			},
			Temporizador: () => {
				const store = getStore();
				setStore({ timer: !store.timer });
			},
			loadClientes: () => {
				fetch(process.env.BACKEND_URL + "/api/clientes")
					.then(response => response.json())
					.then(response => {
						setStore({ clientes: [...response] });
					});
			},
			ClientesInfo: theid => {
				fetch(process.env.BACKEND_URL + "/api/clientes/" + theid)
					.then(response => response.json())
					.then(response => setStore({ clientesDetails: response.result }));
			},
			DeleteCliente: cliente => {
				const _store = getStore();
				fetch(process.env.BACKEND_URL + "/api/clientes/" + cliente.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(cliente)
				});
				_store.clientes.splice(_store.clientes.indexOf(cliente), 1);
				setStore({ clientes: _store.clientes });
			},
			AddCliente: cliente => {
				const _store = getStore();
				fetch(process.env.BACKEND_URL + "/api/clientes", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(cliente)
				});
				_store.clientes.push(cliente);
				setStore({ clientes: _store.clientes });
			},
			UpdateCliente: cliente => {
				const _store = getStore();
				fetch(process.env.BACKEND_URL + "/api/clientes/" + cliente.id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(cliente)
				})
					.then(response => response.json())
					.then(data => getActions().loadClientes());
			},
			//CRUD DE PROYECTOS
			loadProyectos: () => {
				const _store = getStore();
				fetch(process.env.BACKEND_URL + "/api/proyectos")
					.then(response => response.json())
					.then(response => {
						setStore({ proyectos: [...response] });
					});
			},
			AddProyecto: proyecto => {
				const _store = getStore();
				const currentCliente = _store.clienteActual;
				if (currentCliente && proyecto.id_cliente === currentCliente.id) {
					currentCliente.proyectos.push(proyecto);
				}
				fetch(process.env.BACKEND_URL + "/api/proyectos", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(proyecto)
				})
					.then(response => response.json())
					.then(data => getActions().loadProyectos());
			},
			DeleteProyecto: proyecto => {
				fetch(process.env.BACKEND_URL + "/api/proyectos/" + proyecto.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(proyecto)
				})
					.then(response => response.json())
					.then(data => getActions().loadProyectos());
			},
			UpdateProyecto: proyecto => {
				fetch(process.env.BACKEND_URL + "/api/proyectos/" + proyecto.id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(proyecto)
				})
					.then(response => response.json())
					.then(data => getActions().loadProyectos());
			},
			loadTareas: () => {
				fetch(process.env.BACKEND_URL + "/api/tareas")
					.then(response => response.json())
					.then(response => {
						setStore({ tareas: [...response] });
					});
			},
			AddTarea: tarea => {
				const _store = getStore();
				const currentProyecto = _store.proyectoActual;
				if (currentProyecto && tarea.id_proyecto === currentProyecto.id) {
					currentProyecto.tareas.push(tarea);
				}
				fetch(process.env.BACKEND_URL + "/api/tareas", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(tarea)
				})
					.then(response => response.json())
					.then(data => getActions().loadTareas());
			},
			UpdateTarea: tarea => {
				fetch(process.env.BACKEND_URL + "/api/tareas/" + tarea.id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(tarea)
				})
					.then(response => response.json())
					.then(data => getActions().loadTareas());
				//getActions().updateActualTarea();
			},
			DeleteTarea: tarea => {
				fetch(process.env.BACKEND_URL + "/api/tareas/" + tarea.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(tarea)
				})
					.then(response => response.json())
					.then(data => getActions().loadTareas());
			},
			agregarTareaStore: (tarea, idCliente) => {
				const _store = getStore();
				var clienteSelected = null;
				for (let i = 0; i < _store.clientes.length; i++) {
					if (_store.clientes[i].id === idCliente) {
						_store.clientes[i].push(tarea);
						clienteSelected = _store.clientes[i];
					}
				}
				setStore({ clientes: clienteSelected });
			},
			updateActualTarea: () => {
				const _store = getStore();
				const _proyectoActual = _store.proyectoActual;
				const tareas = _store.tareas; //todas
				const tareasActual = []; // del proyecto actual
				if (tareas) {
					for (let i = 0; i < tareas; i++) {
						if (tareas[i].id_proyecto === proyectoActual.id) {
							tareasActual.push(tareas[i]);
						}
					}
				}
				setStore({ proyectoActual: _proyectoActual });
			}
		}
	};
};

export default getState;
