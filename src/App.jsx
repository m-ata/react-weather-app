import React from "react";
import ReactDom from 'react-dom';

import CurrentTemp from "../components/CurrentStatus/CurrentTemp";
import CurrentWeatherDetails from "../components/CurrentStatus/CurrentWeatherDetails";
import Header from "../components/Header/Header";
import HourlyCard from "../components/HourlyCard/HourlyCard";
const App = () => {
    return (
        <div className="main-container">
            <Header />
            <CurrentTemp />
            <CurrentWeatherDetails />
            <HourlyCard />
        </div>
    );
}
export default App;
