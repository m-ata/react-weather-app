import React from "react";
import ReactDom from 'react-dom';

import CurrentTemp from "../components/CurrentStatus/CurrentTemp";
import CurrentWeatherDetails from "../components/CurrentStatus/CurrentWeatherDetails";
import Header from "../components/Header/Header";
const App = () => {
    return (
        <div className="main-container">
            <Header />
            <CurrentTemp />
            <CurrentWeatherDetails />
        </div>
    );
}
export default App;
