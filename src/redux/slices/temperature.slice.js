import { createSlice } from "@reduxjs/toolkit";

const temperatureSlice = createSlice({
    name: 'temperature',
    initialState: 'fahrenheit',
    reducers: {
        setTermperature: (state, action) =>{
            return action.payload
        }
    }
})

export const {setTermperature} = temperatureSlice.actions

export default temperatureSlice.reducer;
