import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/inicio.scss";
import { Inicio } from "../component/Inicio_view";
import Sidebar from "../component/Sidebar";

export const InicioView = () => {
	return (
		<>
			<Sidebar />
			<div className="container h-100 border vista-inicio">
				<Inicio />
			</div>
		</>
	);
};
