import React, { useState } from "react";
import axios from "axios";

import "./Weather";


export default function SearchEngine(props) {
	let [city, setCity] = useState("");
	let [temperature, setTemperature] = useState("");
	let [description, setDescription] = useState("");
	let [humidity, setHumidity] = useState("");
	let [wind, setWind] = useState("");
	let [icon, setIcon] = useState("");

	function showTemperature(response) {
		setTemperature(response.data.main.temp);
		setDescription(response.data.weather[0].description);
		setHumidity(response.data.main.humidity);
		setWind(response.data.wind.speed);
		setIcon(response.data.weather[0].icon);
	}

	function handleSubmit(event) {
		event.preventDefault();
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
		axios.get(url).then(showTemperature);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}

	return (
		<div className="container">
			<div className="Weather">
				<form onSubmit={handleSubmit} className="search-form">
					<div className="row">
						<div className="col-9 ">
							<input
								type="search"
								placeholder="Enter a city.."
								className="form-control search-input"
								id="city-input"
								autoComplete="off"
								onChange={updateCity}
							/>
						</div>
						<div className="col-3 p-0">
							<input
								type="submit"
								className="btn btn-primary w-100"
								value="Search"
							/>
						</div>
					</div>
				</form>
			</div>

			<div className="WeatherInfo">
				<div className="row">
					<div className="col-6">
						<h2 id="city"> {city} </h2>
						<ul>
							<em id="description" className="description">
								{description}
							</em>
							<li className="humidity">
								Humidity:{" "}
								<strong>
									<span id="humidity">{humidity}</span> %
								</strong>{" "}
							</li>
							<li className="humidity">
								Wind:{" "}
								<strong>
									{" "}
									<span id="wind"> {wind} </span> km/h
								</strong>
							</li>
						</ul>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-8">
						<div className="temperature-container d-flex justify-content-end">
							<canvas width="52" height="52"></canvas>
							<img
								src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
								alt="Clear"
								id="icon"
								className="float-right"
							/>
							<div>
								<span className="temperature" id="temperature">
									{temperature}
								</span>{" "}
								<span className="units">°C</span>{" "}
							</div>
						</div>
					</div>
					<footer>
						This project was coded by{" "}
						<a
							class="links"
							href="https://www.linkedin.com/in/ruba-hilal-499358165/"
							target="_blank"
							rel="noopener noreferrer">
							Ruba Hilal
						</a>{" "}
						and is{" "}
						<a
							href="https://github.com/RubaHilal/Weather-App"
							target="_blank"
							rel="noopener noreferrer">
							open-sourced on GitHub
						</a>{" "}
						and{" "}
						<a
							href="https://stirring-torrone-676e50.netlify.app/"
							target="_blank"
							rel="noopener noreferrer">
							hosted on Netlify
						</a>
					</footer>
				</div>
			</div>
		</div>
	);
}
