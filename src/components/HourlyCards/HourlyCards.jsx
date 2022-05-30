import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
const HourlyCards = ({ forecastDay }) => {
  const [days] = forecastDay;
  const temperature = useSelector((state) => state.temperature);
  const getTime = (splitTime) => {
    const time = splitTime.split(" ");
    return time[1];
  };

  return (
      <div className="hourly-card">
        {days?.hour.map((data, index) => (
          <div className="hourly-item" key={index}>
            <label className="hourly-item__hour">{getTime(data?.time)}</label>
            <img src={data?.condition?.icon} alt="icons" />
            <label className="hourly-item__temp">{ temperature === 'centigrade' ? (`${data?.temp_c} ° C`): (`${data?.temp_f} ° F`)}</label>
          </div>
        ))}
      </div>
  );
};

export default HourlyCards;
