import React from 'react';

const CurrentWeatherDetails = () => {
    return (
    <div className='current-weather'>
        <h2>Weather Today in Islamabad, IS</h2>
        <div class="current-weather-details">
            <div class="current-weather-details__items">
                <label><span className='current-weather-details__items__icon'>💦</span> Rain:</label>
                <label>0.00%</label>
            </div>
            <div class="current-weather-details__items">
                <label><span className='current-weather-details__items__icon'>💨</span> Pressure:</label>
                <label>1020hPa</label>
            </div>
            <div class="current-weather-details__items">
                <label>
                    <span className='current-weather-details__items__icon'>💧</span> Humidity:
                    </label>
                <label>61%</label>
            </div>
            <div class="current-weather-details__items">
                <label><span className='current-weather-details__items__icon'>👁️</span> Visibility:</label>
                <label>10 km</label>
            </div>
            <div class="current-weather-details__items">
                <label><span className='current-weather-details__items__icon'>🌪️</span> Wind speed:</label>
                <label>8 m/s</label>
            </div>
        </div>
    </div>
    );
}

export default CurrentWeatherDetails;
