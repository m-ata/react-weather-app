import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useWeather } from "./hooks/useWeather";
import Home from "./pages/Home/Home";
import HourlyForecast from "./pages/HourlyForecast/HourlyForecast";

const AppRouter = () => {
  useWeather();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hours" element={<HourlyForecast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
