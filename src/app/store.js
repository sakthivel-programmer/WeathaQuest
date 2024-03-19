import { configureStore } from '@reduxjs/toolkit';

import weatherSlice from '../features/weather/weatherSlice';
// application store that maintains all our data
export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});
