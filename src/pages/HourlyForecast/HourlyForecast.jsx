import React from "react";
import Collapsible from "react-collapsible";
import { useSelector } from "react-redux";
const HourlyForecast = () => {
    const WeatherData = useSelector(state => state.weather);
    console.log(WeatherData);
  return (
    <div className="hourly-container">
      <div className="title">
        <h2>
          Hourly Weatder - <span className="title-location">Karachi</span>
        </h2>
        <p>As of 18:26 PKT</p>
      </div>
      <div className="hours-section">
        <h3>Sunday, 29 May</h3>
        <div className="hour-section__acordion">
          <Collapsible trigger={
            <div className="accordion">
                <div className="accordion__text1">
                    <span>12:00</span>
                    <span className="temp">20°</span>
                    <span className="title">
                        <img src="" alt=""  />
                        <span>Party CLoud</span>
                    </span>
                </div>
                <div className="accordion__text2">
                    <span>💧 1%</span>
                    <span>🌪️ NE 13 km/h</span>
                    <span>^</span>
                </div>
            </div>
          }>
            <div className="accordion__details">
                <div className="accordion__details__section">
                    <div className="detailsTable">
                        <span>icons</span>
                        <span>
                            <p>Feel like</p>
                            <h6>30</h6>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span>icons</span>
                        <span>
                            <p>Feel like</p>
                            <h6>30</h6>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span>icons</span>
                        <span>
                            <p>Feel like</p>
                            <h6>30</h6>
                        </span>
                    </div>
                </div>
                <div className="accordion__details__section">
                    <div className="detailsTable">
                        <span>icons</span>
                        <span>
                            <p>Feel like</p>
                            <h6>30</h6>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span>icons</span>
                        <span>
                            <p>Feel like</p>
                            <h6>30</h6>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span>icons</span>
                        <span>
                            <p>Feel like</p>
                            <h6>30</h6>
                        </span>
                    </div>
                </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
