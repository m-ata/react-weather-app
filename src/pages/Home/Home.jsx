import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CurrentTemp from "../../components/CurrentStatus/CurrentTemp";
import DailyForecast from "../../components/DailyForecast/DailyForecast";
import Header from "../../components/Header/Header";
import HourlyCards from "../../components/HourlyCards/HourlyCards";
import WeatherBackgroundImages from "../../utils/backgroundImages.json";
const Home = () => {
  const WeatherData = useSelector(state => state.weather);
  return (
    <div className="main-container">
      <Header />
      <CurrentTemp
        currentWeather={WeatherData}
        WeatherImages={WeatherBackgroundImages || []}
      />
      <div className="container">
        <h2>Hourly Forecast</h2>
        <HourlyCards forecastDay={WeatherData?.forecast?.forecastday || []} />
        <Link to="hours"><button className="button">Next Hours</button></Link>
      </div>
      <div className="container">
        <h2>Daily Forecast</h2>
        <DailyForecast forecastDay={WeatherData?.forecast?.forecastday || []} />
      </div>
    </div>
  );
};
export default Home;
