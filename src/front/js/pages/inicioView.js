import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/inicio.scss";
import { Inicio } from "../component/inicio";

export const InicioView = () => {
	return (
		<div className="container">
			<Inicio />
		</div>
	);
};
