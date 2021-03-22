const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			timer: true,
			message: null,
			clientes: [],
			clientesDetails: null,
			proyecto: [],
			tarea: []
		},

		actions: {
			Temporizador: () => {
				const store = getStore();
				setStore({ timer: !store.timer });
			},
			loadClientes: () => {
				// fetch("https://3001-ivory-louse-ahfxh0mk.ws-us03.gitpod.io/api/clientes")
				fetch(process.env.BACKEND_URL + "/api/clientes")
					.then(response => response.json())
					.then(response => {
						setStore({ clientes: [...response] });
						console.log(getStore().clientes);
					});
			},
			ClientesInfo: theid => {
				fetch("https://3001-moccasin-falcon-uqhn3gyc.ws-us03.gitpod.io/api/clientes" + theid)
					.then(response => response.json())
					.then(response => setStore({ clientesDetails: response.result }));
			},
			DeleteCliente: cliente => {
				fetch("https://3001-moccasin-falcon-uqhn3gyc.ws-us03.gitpod.io/api/clientes/" + cliente.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(cliente)
				});
			},
			AddCliente: cliente => {
				const _store = getStore();
				fetch("https://3001-moccasin-falcon-uqhn3gyc.ws-us03.gitpod.io/api/clientes", {
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
				fetch("https://3001-moccasin-falcon-uqhn3gyc.ws-us03.gitpod.io/api/clientes/" + cliente.id, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(cliente)
				});
			},
			// PROYECTO
			loadProyecto: () => {
				fetch("https://3001-ivory-louse-ahfxh0mk.ws-us03.gitpod.io/api/proyecto")
					// fetch(process.env.BACKEND_URL + "/api/clientes")
					.then(response => response.json())
					.then(response => {
						setStore({ proyecto: [...response] });
						console.log(getStore().proyecto);
					});
			},
			AddProyecto: proyecto => {
				const _store = getStore();
				fetch("https://3001-moccasin-falcon-uqhn3gyc.ws-us03.gitpod.io/api/proyecto", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(proyecto)
				});
				_store.proyecto.push(proyecto);
				setStore({ proyecto: _store.proyecto });
			},
			DeleteProyecto: proyecto => {
				fetch("https://3001-moccasin-falcon-uqhn3gyc.ws-us03.gitpod.io/api/proyecto/" + proyecto.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(proyecto)
				});
			}
		}
	};
};

export default getState;
