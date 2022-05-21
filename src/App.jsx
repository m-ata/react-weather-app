import React from "react";
import ReactDom from 'react-dom';

import CurrentTemp from "./components/CurrentStatus/CurrentTemp";
import CurrentWeatherDetails from "./components/CurrentStatus/CurrentWeatherDetails";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import Header from "./components/Header/Header";
import HourlyCard from "./components/HourlyCard/HourlyCard";
const App = () => {
    return (
        <div className="main-container">
            <Header />
            <CurrentTemp />
            <HourlyCard />
            <DailyForecast />
        </div>
    );
}
export default App;
