import React, { useState } from "react";
import search_icon from "../Asset/search.png";
import cloud_icon from "../Asset/cloud.png";
import humidity_icon from "../Asset/humidity.png";
import wind_icon from "../Asset/wind.png";

import clear_icon from "../Asset/clear.png";
import rain_icon from "../Asset/rain.png";
import drizzling_icon from "../Asset/drizzling.png";
import snow_icon from "../Asset/snow.png";
import { clear } from "@testing-library/user-event/dist/clear";

const Weather = () => {
  let API_Key = "9c74ef46f7c17fc9e2098009b345b60d";
  const [weatherIcon, setWeatherIcon] = useState(cloud_icon);

  const handleSearch = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_Key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName("humidityPercentage");
    const wind = document.getElementsByClassName("windSpeed");
    const temperature = document.getElementsByClassName("weatherTemperature");
    const location = document.getElementsByClassName("weatherLocation");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + "&deg;C";
    location[0].innerHTML = data.name;

    // For Icon Change
    // if (data.Weather[0]?.icon === "01d" || data.Weather[0]?.icon === "01n") {
    //   setWeatherIcon(clear_icon);
    // } else if (
    //   data.Weather[0].icon === "02d" ||
    //   data.Weather[0].icon === "02n"
    // ) {
    //   setWeatherIcon(cloud_icon);
    // } else if (
    //   data.Weather[0].icon === "03d" ||
    //   data.Weather[0].icon === "03n"
    // ) {
    //   setWeatherIcon(drizzling_icon);
    // } else if (
    //   data.Weather[0].icon === "04d" ||
    //   data.Weather[0].icon === "04n"
    // ) {
    //   setWeatherIcon(drizzling_icon);
    // } else if (
    //   data.Weather[0].icon === "09d" ||
    //   data.Weather[0].icon === "09n"
    // ) {
    //   setWeatherIcon(rain_icon);
    // } else if (
    //   data.Weather[0].icon === "10d" ||
    //   data.Weather[0].icon === "10n"
    // ) {
    //   setWeatherIcon(rain_icon);
    // } else if (
    //   data.Weather[0].icon === "13d" ||
    //   data.Weather[0].icon === "13n"
    // ) {
    //   setWeatherIcon(snow_icon);
    // } else {
    //   setWeatherIcon(clear_icon);
    // }

  };

  return (
    <>
      <div className="container">
        <div className="topbar">
          <input type="text" className="cityInput" placeholder="City Name" />
          <div className="searchIcon" onClick={handleSearch}>
            <img src={search_icon} alt="Search Icon" />
          </div>
        </div>
        <div className="weatherImage">
          <img src={cloud_icon} alt="Cloud Icon" />
        </div>
        <div className="weatherTemperature">24&deg;c</div>
        <div className="weatherLocation">Hyderabad</div>
        <div className="dataContainer">
          <div className="element">
            <img src={humidity_icon} alt="Humidity Icon" className="icon" />
            <div className="data">
              <div className="humidityPercentage">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="Wind Icon" className="icon" />
            <div className="data">
              <div className="windSpeed">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
