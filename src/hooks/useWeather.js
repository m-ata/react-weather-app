import axios from "axios";
import { useEffect, useState } from "react";

export const useWeather = (location) => {
  const apikey = "19938388dec14d8d998105335222105";

  const [coordinates, setCoordinates] = useState(location);
  const [weather, setWeather] = useState([]);

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
          `http://api.weatherapi.com/v1/forecast.json?key=19938388dec14d8d998105335222105&q=lat=${coordinates.lat}&lon=${coordinates.long}&days=1&aqi=no&alerts=no`
        )
        .then((response) => {
          // handle success
          setWeather(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }, [coordinates]);

  return weather;
};
