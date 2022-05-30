import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setTermperature } from '../../redux/slices/temperature.slice';
import './style.scss'
const Header = () => {
    const [darkMode, setDarkMode] = useState();
    const dispatch = useDispatch()
    return (
        <div className='header'>
            <span className='header__logo'>🌎</span>
            <span className='header__searchBar'>
                <input type="search" className='searchInput' placeholder="Search City or Postcode" />
                <span>🔎</span>
            </span>
            <span className='header__modesButton'>
                <button className='temperatureConverter' onClick={() => { dispatch(setTermperature("centigrade"))}}>°C</button>
                <button className='temperatureConverter' onClick={() => { dispatch(setTermperature("fahrenheit"))}}>°F</button>
                <button className='darkModeButton' onClick={() => {setDarkMode(!darkMode)}}>
                    {darkMode === true ? '🌙': '🌞'}
                </button>
            </span>
        </div>
     );
}

export default Header;
