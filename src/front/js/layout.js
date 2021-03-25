import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
//folder landing page
import { CaracteristicasView } from "./pages/caracteristicas";

//folder views
//import { Home } from "./pages/home";
//import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { ContactoView } from "./pages/contacto";
import { PreciosView } from "./pages/precios";
import { InicioView } from "./pages/inicioView";
import injectContext from "./store/appContext";
// import { ProyectosView } from "./pages/proyectos";
//folder popUpsLandingPage
import { Login } from "./component/popUpsLandingPage/login";
import { SignUp } from "./component/popUpsLandingPage/signUp";
import { Recovery } from "./component/popUpsLandingPage/recovery";
import { VerifyMessage } from "./component/popUpsLandingPage/verifyMessage";

// folder component
//import { Navbar } from "./component/navbar";
//import { Footer } from "./component/footer";
import Sidebar from "./component/Sidebar";
import { AddProyect } from "./component/addNewProyect";
import { UserName } from "./component/userName";
import { LandingPage } from "./pages/landingPage";
import { Clientes } from "./pages/Clientes";
import { Inicio } from "./pages/Inicio";
import { Calendario } from "./pages/Calendario";
import { Tareas } from "./pages/Tareas";
import { Proyectos } from "./pages/Proyectos";
import { Proyectos_cliente } from "./views_especificos/Proyectos_cliente";
import { Tareas_proyecto } from "./views_especificos/Tareas_proyecto";
import { TareasDeProyecto } from "./views_especificos/TareasDeProyecto";
import { Inicio_view2 } from "./pages/Inicio_view2";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100 main-container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/* <Navbar /> */}
					{/* <Sidebar /> */}
					<Switch>
						<Route exact path="/clientes">
							<Clientes />
						</Route>
						<Route exact path="/calendario">
							<Calendario />
						</Route>
						<Route exact path="/recovery">
							<Recovery />
						</Route>
						<Route exact path="/landingpage">
							<LandingPage />
						</Route>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/contacto">
							<ContactoView />
						</Route>
						<Route exact path="/caracteristicas">
							<CaracteristicasView />
						</Route>
						<Route exact path="/precios">
							<PreciosView />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signUp">
							<SignUp />
						</Route>
						<Route exact path="/recovery">
							<Recovery />
						</Route>
						<Route exact path="/verifyMessage">
							<VerifyMessage />
						</Route>
						<Route exact path="/proyectos">
							<Proyectos />
						</Route>
						<Route exact path="/tareas">
							<Tareas />
						</Route>
						<Route exact path="/addNewProyect">
							<AddProyect />
						</Route>
						<Route exact path="/userName">
							<UserName />
						</Route>
						<Route exact path="/inicio">
							<Inicio />
						</Route>
						<Route exact path="/Sidebar">
							<Sidebar />
						</Route>
						<Route exact path="/ProyectosCliente">
							<Proyectos_cliente />
						</Route>
						<Route exact path="/TareasProyectos">
							<Tareas_proyecto />
						</Route>
						{/* <Route exact path="/inicio">
							<Inicio_view2 />
						</Route> */}
						{/* <Route exact path="/TareasDeProyecto">
							<TareasDeProyecto />
						</Route> */}
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					{/* <Footer /> */}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
