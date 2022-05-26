import React, {useState} from "react";
import CurrentTemp from "./components/CurrentStatus/CurrentTemp";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Header from "./components/Header/Header";
import HourlyCards from "./components/HourlyCards/HourlyCards";
import { useWeather } from "./hooks/useWeather";
const App = () => {
    const WeatherData = useWeather();
    return (
        <div className="main-container">
            <Header />
            <CurrentTemp currentWeather={WeatherData} />
            <HourlyCards forecastDay= {WeatherData?.forecast?.forecastday || []} />
            <DailyForecast forecastDay = {WeatherData?.forecast?.forecastday || []} />
        </div>
    );
}
export default App;
