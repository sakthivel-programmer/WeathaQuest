import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  weatherReport:""
};


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchWeatherReportAsync = createAsyncThunk(
  'weather/fetchWeather',
  async (payload,ThunkAPI) => {
    await fetch(`https://api.tomorrow.io/v4/weather/forecast?location=${payload.location}&apikey=0D0eMMvwb7QknIW1fFTjT1git2LtPaEI`)
    .then(res => res.json())
    .then( parseData => 
      ThunkAPI.dispatch(setWeatherReport({report:parseData}))
    )
    // // The value we return becomes the `fulfilled` action payload
    // return response.data;
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setWeatherReport: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // console.log(action.payload.report,"reducer")
      state.weatherReport = action.payload.report;
    }
  },

});
// exporting reducer action
export const { setWeatherReport } = weatherSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWeather = (state) => state.weather;
// exporting reducer function
export default weatherSlice.reducer;
