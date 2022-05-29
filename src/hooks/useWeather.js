import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setWeatherData } from "../redux/slices/weather.slice";

export const useWeather = (location) => {
  const apikey = "65dc5293c5214886818183623222505";

  const [coordinates, setCoordinates] = useState(location);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!location) {
      window.navigator.geolocation.getCurrentPosition(
        (location) => {
          setCoordinates({
            long: location.coords.longitude,
            lat: location.coords.latitude,
          });
        },
        () => console.log("unable to get current position")
      );
    }
    setCoordinates(location);
  }, [location]);

  useEffect(() => {
    //call weather api to get weather
    if (coordinates?.long && coordinates?.lat) {
      axios
        .get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=lat=${coordinates.lat}&lon=${coordinates.long}&days=7&aqi=no&alerts=no`
          // 'http://api.weatherapi.com/v1/forecast.json?key=65dc5293c5214886818183623222505&q=Karachi&days=7&aqi=no&alerts=no'
        )
        .then((response) => {
          // handle success
          dispatch(setWeatherData(response.data));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [coordinates]);

};
