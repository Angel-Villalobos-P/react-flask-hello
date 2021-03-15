import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landingpage.scss";
import { Precios } from "../component/landingpage/precios";
import { Navbar } from "../component/navbar";

export const PreciosView = () => {
	return (
		<div className="container">
			<Navbar />
			<Precios />
		</div>
	);
};
