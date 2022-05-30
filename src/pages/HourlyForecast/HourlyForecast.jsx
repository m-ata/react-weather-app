import React from "react";
import moment from "moment";
import Collapsible from "react-collapsible";
import { useSelector } from "react-redux";
const HourlyForecast = () => {
    const WeatherData = useSelector(state => state.weather);
    const temperature = useSelector((state) => state.temperature);
    const { location, forecast } = WeatherData;
    const forecastDay = forecast?.forecastday || [];
    const getTime = (splitTime) => {
      const time = splitTime.split(" ");
      return time[1];
    };
    const getDayFormat = (getDate) => {
      const day = moment(getDate, "YYYY-MM-DD");
      return `${day.format("dddd")}, ${day.format("MMM Do YY")}`;
    };
  return (
    <div className="hourly-container">
      <div className="title">
        <h2>
          Hourly Weatder - <span className="title-location">{location?.name}</span>
        </h2>
        <p>As of {getTime(`${location?.localtime}`)} PKT</p>
      </div>
      {forecastDay.map((day, index) => (
        <div className="hours-section" key={index}>
        <h3>{getDayFormat(day?.date)}</h3>
        {day?.hour.map((hours, tab) => (
        <div className="hours-section__acordion" key={tab}>
          <Collapsible trigger={
            <div className="accordion">
                <div className="accordion__text1">
                    <span>{getTime(`${hours?.time}`)}</span>
                    <span className="temp">{temperature === 'centigrade'?(`${hours?.temp_c}° C`):(`${hours?.temp_f}° F`)}</span>
                    <span className="title">
                        <img src={hours?.condition?.icon} alt=""  />
                        <span>{hours?.condition?.text}</span>
                    </span>
                </div>
                <div className="accordion__text2">
                    <span>💧 {hours?.chance_of_rain}%</span>
                    <span>🌪️ {hours?.wind_kph} 13 km/h</span>
                </div>
                <span className='dropdown-icon'>+</span>
            </div>
          }>
            <div className="accordion__details">
                <div className="accordion__details__section">
                    <div className="detailsTable">
                        <span className="detailsTable__icon">🌡️</span>
                        <span>
                            <p className="detailsTable__text">Feel like</p>
                            <p className="detailsTable__value">{temperature === 'centigrade' ? (`${hours?.feelslike_c}° C`) : (`${hours?.feelslike_f}° F`)}</p>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span className="detailsTable__icon">🌡️</span>
                        <span>
                            <p className="detailsTable__text">Wind</p>
                            <p className="detailsTable__value">{hours?.wind_kph} km/h</p>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span className="detailsTable__icon">🌡️</span>
                        <span>
                            <p className="detailsTable__text">Humidity</p>
                            <p className="detailsTable__value">{hours?.humidity}%</p>
                        </span>
                    </div>
                </div>
                <div className="accordion__details__section">
                    <div className="detailsTable">
                        <span className="detailsTable__icon">🌡️</span>
                        <span>
                            <p className="detailsTable__text">UV Index</p>
                            <p className="detailsTable__value">{hours?.uv} out 10</p>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span className="detailsTable__icon">🌡️</span>
                        <span>
                            <p className="detailsTable__text">Cloud Cover</p>
                            <p className="detailsTable__value">{hours?.cloud}%</p>
                        </span>
                    </div>
                    <div className="detailsTable">
                        <span className="detailsTable__icon">🌡️</span>
                        <span>
                            <p className="detailsTable__text">Rain Amount</p>
                            <p className="detailsTable__value">{hours?.will_it_rain} cm</p>
                        </span>
                    </div>
                </div>
            </div>
          </Collapsible>
        </div>
        ))}
      </div>
      ))}

    </div>
  );
};

export default HourlyForecast;
