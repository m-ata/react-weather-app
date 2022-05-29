import React from "react";

const CurrentWeatherDetails = ({ CurrentWeatherDetails, locationName }) => {
  return (
    <div className="current-weather">
      <h2>Weather Today in {locationName}, IS</h2>
      <div className="current-weather-details">
        <div className="current-weather-details__items">
          <label>
            <span className="current-weather-details__items__icon">☁️</span>{" "}
            Cloud:
          </label>
          <label>{CurrentWeatherDetails?.cloud} %</label>
        </div>
        <div className="current-weather-details__items">
          <label>
            <span className="current-weather-details__items__icon">💨</span>{" "}
            Pressure:
          </label>
          <label>{CurrentWeatherDetails?.pressure_mb}hPa</label>
        </div>
        <div className="current-weather-details__items">
          <label>
            <span className="current-weather-details__items__icon">💧</span>{" "}
            Humidity:
          </label>
          <label>{CurrentWeatherDetails?.humidity} %</label>
        </div>
        <div className="current-weather-details__items">
          <label>
            <span className="current-weather-details__items__icon">👁️</span>{" "}
            Visibility:
          </label>
          <label>{CurrentWeatherDetails?.vis_km} km</label>
        </div>
        <div className="current-weather-details__items">
          <label>
            <span className="current-weather-details__items__icon">🌪️</span>{" "}
            Wind speed:
          </label>
          <label>{CurrentWeatherDetails?.wind_mph} m/h</label>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;
