import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/weather.css";
const Weather = () => {
  const API_KEY = "86d6ab5391472bbdb665c6785ba5769a";
  const [temperature, setTemperature] = useState({
    city: "",
    degrees: 0,
    weatherIcon: "",
    humidity: 0,
    description: "",
  });
  const getAPI = (lat, lon) => {
    let API = "";
    if (lat === undefined || lon === undefined) {
      API = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=${API_KEY}`;
    } else {
      API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`;
    }
    return API;
  };
  const weatherAPI = async (lat, lon) => {
    const API = getAPI(lat, lon);
    try {
      const res = await axios.get(API);
      setTemperature({
        city: res.data.name,
        degrees: Math.round(res.data.main.temp - 273.15),
        weatherIcon: res.data.weather[0].icon,
        humidity: res.data.main.humidity,
        description: res.data.weather[0].description,
      });
    } catch (err) {
      alert("Error:", err);
    }
  };
  const success = (pos) => {
    const crd = pos.coords;
    weatherAPI(crd.latitude, crd.longitude);
  };
  const error = (err) => {
    weatherAPI();
  };
  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };
  useEffect(() => {
    getGeoLocation();
  }, []);
  return (
    <div className="weather-cont">
      <div className="city-temp">{temperature.city}</div>
      <div className="temp-degree">
        <img
          src={`http://openweathermap.org/img/wn/${temperature.weatherIcon}.png`}
          alt="weatherpic"
        />
        {temperature.degrees}°
      </div>
      <div className="temp-des">{temperature.description}</div>
      <div className="humidity">Humidity : {temperature.humidity}</div>
    </div>
  );
};

export { Weather };
