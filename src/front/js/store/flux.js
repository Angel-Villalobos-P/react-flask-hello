const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			timer: true,
			message: null,
			clientes: [],
			clientesDetails: null
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
				fetch("https://3001-ivory-louse-ahfxh0mk.ws-us03.gitpod.io/api/clientes/" + theid)
					.then(response => response.json())
					.then(response => setStore({ clientesDetails: response.result }));
			}
		}
	};
};

export default getState;
