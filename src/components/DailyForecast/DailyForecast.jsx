import moment from "moment";
import React, { useState } from "react";
import Collapsible from 'react-collapsible';
import "./style.scss";
const DailyForecast = ({ forecastDay }) => {
  const [openDailyDetails, setOpenDailyDetails] = useState(false);
  // console.log( getDayFormat( forecastDay[0]?.date ));
  const getDayFormat = (getDate) => {
    const day = moment(getDate, "YYYY-MM-DD");
    return day.format("dddd");
  };

  return (
    <div className="daily-item-container">
      <h2>Daily Forecast</h2>
      {forecastDay.map((day, index) => (
        <Collapsible key={index} trigger={
          <div className="daily-item">
          <div className="text-1">
            <img
              className="icon"
              src={day?.day?.condition?.icon}
              alt="icons"
            />
            <label className="day">{getDayFormat(day?.date)}</label>
          </div>
          <div className="text-2">
            <label className="description">{day?.day?.condition?.text}</label>
            <label className="min-max">{day?.day?.avgtemp_f} °F</label>
          </div>
        </div>
       }>
       <div className="daily-details">
               <div className="daily-details__item">
                 <label>Chance of Rain:</label>
                 <label>{day?.day?.daily_chance_of_rain} %</label>
               </div>
               <div className="daily-details__item">
                 <label>Chance of Snow:</label>
                 <label>{day?.day?.daily_chance_of_snow} %</label>
               </div>
               <div className="daily-details__item">
                 <label>Average Humidity:</label>
                 <label>{day?.day?.avghumidity} %</label>
               </div>
               <div className="daily-details__item">
                 <label>Average Wind speed:</label>
                 <label>{day?.day?.maxwind_mph} m/h</label>
               </div>
               <div className="daily-details__item">
                 <label>Average Visibility:</label>
                 <label>{day?.day?.avgvis_km} km</label>
               </div>
               <div className="daily-details__item">
                 <label>Average Temperature:</label>
                 <label>{day?.day?.avgtemp_f} °F</label>
               </div>
               <div className="daily-details__item">
                 <label>Sunrise:</label>
                 <label>{day?.astro?.sunrise}</label>
               </div>
               <div className="daily-details__item">
                 <label>Sunset:</label>
                 <label>{day?.astro?.sunset}</label>
               </div>
             </div>
       </Collapsible>
      ))}

    </div>
  );
};

export default DailyForecast;
