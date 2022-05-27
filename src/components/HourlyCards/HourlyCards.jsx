import React, { useEffect, useState } from "react";
import "./style.scss";
const HourlyCards = ({ forecastDay }) => {
  const [days] = forecastDay;
  // console.log("day1 ===>", days?.hour);

  const getTime = (splitTime) => {
    const time = splitTime.split(" ");
    return time[1];
  };

  return (
    <div className="hourly-container">
      <h2>Hourly Forecast</h2>
      <div className="hourly-card">
        {days?.hour.map((data, index) => (
          <div className="hourly-item" key={index}>
            <label className="hourly-item__hour">{getTime(data?.time)}</label>
            <img src={data?.condition?.icon} alt="icons" />
            <label className="hourly-item__temp">{data?.temp_f}° F</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyCards;
