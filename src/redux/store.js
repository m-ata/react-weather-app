import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from './slices/weather.slice'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    weather: weatherReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: [thunk]
})
