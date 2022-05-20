import React from 'react';
import './style.scss';
const CurrentTemp = () => {
    let currentDate = new Date();
    return (
        <div className='currentStatus'>
            <div className='currentStatus__location'>
                <h1 className='currentStatus__location__title'>Location</h1>
                <h3 className='currentStatus__location__name'>Turkey</h3>
                <span className='currentStatus__location__date'>{ currentDate.toUTCString() }</span>
            </div>
            <div className='currentStatus__temperature'>
                <span className='currentStatus__temperature__icon'> ☀️ </span>
                <span className='currentStatus__temperature__details'>
                    <h2 className='currentStatus__temperature__details__temp'>69° <span>F</span></h2>
                    <span className='currentStatus__temperature__details__feelLike'>Feel Like <span>68°</span></span>
                    <span className='currentStatus__temperature__details__description'>clear sky</span>
                </span>
            </div>
        </div>
     );
}
export default CurrentTemp;
