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
			proyectoActual: null
		},

		actions: {
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
				fetch("https://3001-moccasin-falcon-uqhn3gyc.ws-us03.gitpod.io/api/clientes" + theid)
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
				//const _store = getStore();
				fetch(process.env.BACKEND_URL + "/api/proyectos")
					.then(response => response.json())
					.then(response => {
						setStore({ proyectos: [...response] });
					});
			},
			AddProyecto: proyecto => {
				const _store = getStore();
				fetch(process.env.BACKEND_URL + "/api/proyectos", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(proyecto)
				});
				_store.proyectos.push(proyecto);
				setStore({ proyecto: _store.proyecto });
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
				fetch(process.env.BACKEND_URL + "/api/tareas", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(tarea)
				});
				_store.tareas.push(tarea);
				setStore({ tareas: _store.tareas });
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
			}
		}
	};
};

export default getState;
