import React, { useContext } from "react";
<<<<<<< HEAD
//import { Context } from "../store/appContext";
=======
import { Context } from "../store/appContext";
>>>>>>> cee654a5651edc5dcc63399c6351d1b8126c860e
import "../../styles/landingpage.scss";
import { Caracteristicas1 } from "../component/landingpage/caracteristicas1";
import { Caracteristicas2 } from "../component/landingpage/caracteristicas2";
import { LandingCarousel } from "../component/landingpage/landingcarousel";
import { Precios } from "../component/landingpage/precios";
import { Contacto } from "../component/landingpage/contacto";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const LandingPage = () => {
	return (
		<div className="container">
			<Navbar />
			<LandingCarousel />
			<Caracteristicas1 />
			<Caracteristicas2 />
			<Precios />
			<Contacto />
		</div>
	);
};
