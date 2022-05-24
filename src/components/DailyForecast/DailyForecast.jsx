import React, { useState } from 'react';
import "./style.scss";
const DailyForecast = () => {
    const [ openDailyDetails, setOpenDailyDetails ] = useState(false);

    return (
        <div className='daily-item-container'>
            <h2>Daily Forecast</h2>
            <div className="daily-item" onClick={() => setOpenDailyDetails(!openDailyDetails)}>
                <div className='text-1'>
                    <span className='icon'>☀️</span>
                    <label className="day">Friday</label>
                </div>
                <div className='text-2'>
                    <label className="description">moderate rain</label>
                    <label className="min-max">59°F / 83°F</label>
                </div>
            </div>
            {openDailyDetails == true &&
            <div className="daily-details">
                <div className="daily-details__item">
                    <label>Rain:</label><label>53.00%</label>
                </div>
                <div className="daily-details__item">
                    <label>Pressure:</label><label>1018hPa</label>
                </div>
                <div className="daily-details__item">
                    <label>Humidity:</label><label>51%</label>
                </div><div className="daily-details__item">
                    <label>Clouds:</label><label>43%</label>
                </div><div className="daily-details__item">
                    <label>Wind speed:</label><label>9 m/s</label>
                </div><div className="daily-details__item">
                    <label>UV Index:</label><label>6.86</label>
                </div><div className="daily-details__item">
                    <label>Sunrise:</label><label>08:06</label>
                </div><div className="daily-details__item">
                    <label>Sunset:</label><label>22:56</label>
                </div>
            </div>
            }
        </div>

    );
}

export default DailyForecast;
