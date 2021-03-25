import React, { useState, useEffect, useContext } from "react";
// import dateFns from "date-fns";
import * as dateFns from "date-fns";
import "../../styles/Calendario.scss";
import Swal from "sweetalert2";
import { Context } from "../store/appContext";

export const Calendario = () => {
	const { store, actions } = useContext(Context);
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [days, setDays] = useState([]);
	const [rows, setRows] = useState([]);

	var options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	};

	const renderHeader = () => {
		const dateFormat = "MMMM yyyy";

		return (
			<div className="header row flex-middle">
				<div className="col col-start">
					<div className="icon" onClick={() => prevMonth()}>
						chevron_left
					</div>
				</div>
				<div className="col col-center">
					<span>{dateFns.format(currentMonth, dateFormat)}</span>
				</div>
				<div className="col col-end" onClick={() => nextMonth()}>
					<div className="icon">chevron_right</div>
				</div>
			</div>
		);
	};

	const renderDays = () => {
		const dateFormat = "dddd";
		const days = [];

		let startDate = dateFns.startOfWeek(currentMonth);

		for (let i = 0; i < 7; i++) {
			days.push(
				<div className="col col-center" key={i}>
					{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
				</div>
			);
		}

		//return <div className="days row">{days}</div>;
		setDays(days);
	};

	const getTareas = () => {
		for (let i = 0; i < store.tareas.length; i++) {
			const element = store.tareas[i];
		}
	};

	const test = d => {
		// Swal.fire("Good job!", "You clicked the button!", "success");
		Swal.fire({
			title: "<strong>Próximas entregas</strong>",
			icon: "info",
			html:
				"You can use <b>bold text</b>, " +
				"<ul><li>Tarea 1</li><li>Tarea 2</li></ul>" +
				d.toLocaleDateString(options),
			confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok!',
			confirmButtonAriaLabel: "Ok!"
		});
	};

	const entregas = () => {
		var fechas = ["24/3/2021", "26/3/2021", "28/3/2021"];
		return fechas;
	};
	var fechas = ["24/3/2021", "26/3/2021", "28/3/2021"];

	useEffect(() => {
		const dateFormat = "dddd";
		const days = [];

		let startDate = dateFns.startOfWeek(currentMonth);

		for (let i = 0; i < 7; i++) {
			days.push(
				<div className="col col-center" key={i}>
					{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
				</div>
			);
		}
		setDays(days);
		//renderDays();

		//==========================================
		// const { currentMonth, selectedDate } = [currentMonth, selectedDate];
		const currentMonth2 = new Date();
		const selectedDate2 = new Date();
		const monthStart = dateFns.startOfMonth(currentMonth2);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate2 = dateFns.startOfWeek(monthStart);
		const endDate = dateFns.endOfWeek(monthEnd);

		const dateFormat2 = "d";
		const rows = [];

		let days2 = [];
		let day = startDate2;
		let formattedDate = "";

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = dateFns.format(day, dateFormat2);
				const cloneDay = day;
				days2.push(
					<div
						className={`col cell ${
							!dateFns.isSameMonth(day, monthStart)
								? "disabled"
								: dateFns.isSameDay(day, selectedDate2)
									? "selected"
									: ""
						}`}
						key={day}
						// onClick={() => onDateClick(dateFns.parse(cloneDay))}>
						onClick={() => test(monthStart)}>
						<span className="number">{formattedDate}</span>
						<span className="bg">{formattedDate}</span>
						{/* <i className="fas fa-dot-circle" /> */}
						{store.proyectos.length != 0
							? store.proyectos.map((item, i) => {
									if (item.fecha_entrega.split("/")[0] === formattedDate) {
										return (
											<i
												key={i}
												className="fas fa-dot-circle fa-xs"
												style={{ color: "#796AEE" }}
											/>
										);
									}
							  })
							: console.log(store.proyectos)}
					</div>
				);
				day = dateFns.addDays(day, 1);
			}
			rows.push(
				<div className="row" key={day}>
					{days2}
				</div>
			);
			days2 = [];
		}
		setRows(rows);
		// renderCells();
		console.log("DAys ", days);
		console.log("Rows ", rows);
		console.log("datees ", currentMonth2);
	}, []);

	const renderCells = () => {
		const { currentMonth, selectedDate } = [currentMonth, selectedDate];
		const monthStart = dateFns.startOfMonth(currentMonth);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate = dateFns.startOfWeek(monthStart);
		const endDate = dateFns.endOfWeek(monthEnd);

		const dateFormat = "D";
		const rows = [];

		let days = [];
		let day = startDate;
		let formattedDate = "";

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = dateFns.format(day, dateFormat);
				const cloneDay = day;
				days.push(
					<div
						className={`col cell ${
							!dateFns.isSameMonth(day, monthStart)
								? "disabled"
								: dateFns.isSameDay(day, selectedDate)
									? "selected"
									: ""
						}`}
						key={day}
						onClick={() => onDateClick(dateFns.parse(cloneDay))}>
						<span className="number">{formattedDate}</span>
						<span className="bg">{formattedDate}</span>
					</div>
				);
				day = dateFns.addDays(day, 1);
			}
			rows.push(
				<div className="row" key={day}>
					{days}
				</div>
			);
			days = [];
		}
		//return <div className="body">{rows}</div>;
		setRows(rows);
	};

	const onDateClick = day => {
		setSelectedDate(day);
	};

	const nextMonth = () => {
		setCurrentMonth(dateFns.addMonths(currentMonth, 1));
	};

	const prevMonth = () => {
		setCurrentMonth(dateFns.subMonths(currentMonth, 1));
	};

	return (
		<div className="calendar">
			{/* {() => renderHeader()}
			{renderDays}
			{renderCells} */}
			<div className="header row flex-middle">
				<div className="col col-start">
					<div className="icon" onClick={() => prevMonth()}>
						chevron_left
					</div>
				</div>
				<div className="col col-center">
					<span>{dateFns.format(currentMonth, "MMMM yyyy")}</span>
				</div>
				<div className="col col-end" onClick={() => nextMonth()}>
					<div className="icon">chevron_right</div>
				</div>
			</div>
			<div className="days row">{days}</div>
			<div className="body">{rows}</div>
		</div>
	);
};
