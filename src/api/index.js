const axios = require('axios').default;

export const getWeatherByLocation = async () => {
    const response = await axios.get('http://api.weatherapi.com/v1/current.json?key=19938388dec14d8d998105335222105&q=lat=25.0261424&lon=67.082216&aqi=yes')
    return response;
}
