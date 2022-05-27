import React, {useState} from "react";
import CurrentTemp from "./components/CurrentStatus/CurrentTemp";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Header from "./components/Header/Header";
import HourlyCards from "./components/HourlyCards/HourlyCards";
import { useWeather } from "./hooks/useWeather";
import WeatherBackgroundImages from "./utils/backgroundImages.json";
const App = () => {
    const WeatherData = useWeather();
    return (
        <div className="main-container">
            <Header />
            <CurrentTemp currentWeather={WeatherData} WeatherImages = {WeatherBackgroundImages || []} />
            <HourlyCards forecastDay= {WeatherData?.forecast?.forecastday || []} />
            <DailyForecast forecastDay = {WeatherData?.forecast?.forecastday || []} />
        </div>
    );
}
export default App;
