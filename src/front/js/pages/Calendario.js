import React, { useState, useEffect } from "react";
// import dateFns from "date-fns";
// import * as dateFns from "date-fns";
import "../../styles/Calendario.scss";
import Swal from "sweetalert2";

export const Calendario = () => {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [days, setDays] = useState([]);
	const [rows, setRows] = useState([]);

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

	const test = () => {
		Swal.fire("Good job!", "You clicked the button!", "success");
	};

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
						onClick={() => test()}>
						<span className="number">{formattedDate}</span>
						<span className="bg">{formattedDate}</span>
						{/* <i className="fas fa-dot-circle" /> */}
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
