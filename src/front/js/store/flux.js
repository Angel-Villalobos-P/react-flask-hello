const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			clientes: [],
			clientesDetails: null
		},
		actions: {
			loadClientes: url => {
				fetch(url)
					.then(response => response.json())
					.then(response => {
						setStore({ clientes: [...response] });
						console.log(getStore().clientes);
					});
			},
			ClientesInfo: theid => {
				fetch("https://3001-magenta-kangaroo-ckz5y6of.ws-us03.gitpod.io/api/clientes/" + theid)
					.then(response => response.json())
					.then(response => setStore({ clientesDetails: response.result }));
			}
		}
	};
};

export default getState;
