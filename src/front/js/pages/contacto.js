import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/landingpage.scss";
import { Contacto } from "../component/landingpage/contacto";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const ContactoView = () => {
	return (
		<div className="container">
			<Navbar />
			<Contacto />
		</div>
	);
};
