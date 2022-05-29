import React from "react";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import "./style.scss";
const CurrentTemp = ({ currentWeather, WeatherImages }) => {
  const { location, current } = currentWeather;

  const getWeatherBackground = () => {
    const background = WeatherImages.find(
      (item) => item?.code === current?.condition?.code
    );
    return background?.background;
  };
  return (
    <div
      style={{ backgroundImage: `url( ${getWeatherBackground()})` }}
      className="weatherBackground"
    >
      <div className="titlesection-container">
        <div className="currentStatus">
          <div className="currentStatus__location">
            <h1 className="currentStatus__location__title">{location?.name}</h1>
            <h3 className="currentStatus__location__name">
              {location?.country}
            </h3>
            <span className="currentStatus__location__date">
              {current?.last_updated}
            </span>
          </div>
          <div className="currentStatus__temperature">
            {/* <span className='currentStatus__temperature__icon'> ☀️ </span> */}
            <img
              src={current?.condition?.icon}
              alt="icon"
              className="currentStatus__temperature__icon"
            />
            <span className="currentStatus__temperature__details">
              <h2 className="currentStatus__temperature__details__temp">
                {current?.temp_f}°<span> F</span>
              </h2>
              <span className="currentStatus__temperature__details__feelLike">
                Feel Like {current?.feelslike_f}°{" "}
              </span>
              <span className="currentStatus__temperature__details__description">
                {current?.condition?.text} sky
              </span>
            </span>
          </div>
        </div>
        <CurrentWeatherDetails
          CurrentWeatherDetails={current}
          locationName={location?.name}
        />
      </div>
    </div>
  );
};
export default CurrentTemp;
