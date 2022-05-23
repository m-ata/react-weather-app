import React, {useState} from "react";
import CurrentTemp from "./components/CurrentStatus/CurrentTemp";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Header from "./components/Header/Header";
import HourlyCards from "./components/HourlyCards/HourlyCards";
import { useWeather } from "./hooks/useWeather";
const App = () => {
    const WeatherData = useWeather();
    console.log(WeatherData?.forecast);
    return (
        <div className="main-container">
            <Header />
            <CurrentTemp currentWeather={WeatherData} />
            <HourlyCards forecastDay={WeatherData?.forecast?.forecastday} />
            <DailyForecast />
        </div>
    );
}
export default App;
