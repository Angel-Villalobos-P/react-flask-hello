import React, { useState, useRef, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Timer = props => {
	const { store, actions } = useContext(Context);

	const [time, setTime] = useState(new Date().toLocaleTimeString());
	const secondsPassed = useRef(0);

	const [totalHoras, setTotalHoras] = useState("00:00:00");

	const [horas, setHoras] = useState(0);
	const [minutos, setMinutos] = useState(0);
	const [segundos, setSegundos] = useState(0);

	useEffect(
		() => {
			const timeout = setTimeout(() => {
				const date = new Date();
				//let horas = 0;
				//let minutos = 0;
				//let segundos = 0;
				//segundos = secondsPassed.current + 1;
				setSegundos(segundos + 1);

				if (segundos > 59) {
					setMinutos(minutos + 1);
					setSegundos(0);
				}
				if (minutos > 59) {
					setHoras(horas + 1);
					setMinutos(0);
				}

				// if (horas < 10) {
				// 	horas = "0" + horas;
				// }
				// if (minutos < 10) {
				// 	minutos = "0" + minutos;
				// }
				// if (segundos < 10) {
				// 	segundos = "0" + segundos;
				// }
				setTotalHoras(horas + ":" + minutos + ":" + segundos);

				secondsPassed.current = secondsPassed.current + 1;
				setTime(date.toLocaleTimeString());
			}, 1000);
			return () => {
				clearTimeout(timeout);
			};
		},
		//[time, store.timer]
		[store.timer]
	);

	return (
		<div>
			{/* <div>{time}</div>
			<div>{secondsPassed.current}</div> */}
			<small>
				<i className="far fa-calendar-alt" style={{ marginRight: "2px" }} />
				16 de mar
				<i className="far fa-clock" style={{ marginRight: "2px", marginLeft: "5px" }} />
				Temporizador {time}
			</small>
			{/* <small>Horas {totalHoras}</small> */}
		</div>
	);
};
