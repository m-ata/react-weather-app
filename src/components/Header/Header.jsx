import React from 'react';
import './style.scss'
const Header = () => {
    return (
        <div className='header'>
            <span className='header__logo'>🌎</span>
            <span className='header__searchBar'>
                <input type="search" className='searchInput' placeholder="Search City or Postcode" />
                <span>🔎</span>
            </span>
            <span className='header__modesButton'>
                <span className='temperatureConverter' onClick={() => {}}>°C</span>
                <span className='temperatureConverter' onClick={() => {}}>°F</span>
                <button className='darkModeButton' onClick={() => {}}>🌙 / 🌞</button>
            </span>
        </div>
     );
}

export default Header;
