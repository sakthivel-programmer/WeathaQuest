import React, { useState } from "react";
// importing CSS module
import Styles from "./control_panel.module.css";
// dispatch feature from react-redux lib
import { useDispatch} from "react-redux";
// importing the async thunk function
import {fetchWeatherReportAsync} from "../features/weather/weatherSlice"
// functional component
function Main(){
  // initializing dispatch function
  const dispatch = useDispatch();
  // state for set location name
  const [location, setLocation] = useState("")
  // function to handle submit
  function handleSubmit(e){
    // preventing from screen reload
    e.preventDefault();
    // dispatching the location name to AsyncThunk function
    dispatch(fetchWeatherReportAsync({location}))
    
  }
  // JSX to be rendered
  return (

    <div className={Styles.control_panel}>

      <div className={Styles.desired_location_check_outer_div}>

        <div className={Styles.desired_location_check_inner_div}>

          <p className={Styles.label}>Enter desired location</p>

          <form onSubmit={handleSubmit}>

            <input className={Styles.location_input}
              onChange={(e)=>setLocation(e.target.value)}
              type="text"
              id="location"
              placeholder="Refer map & Enter location"
            />

            <button className={Styles.check_button} type="submit">Check Weather</button>

          </form>

        </div>

      </div>
      {/* Map gio location for refering location to users */}
      <p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4012924.123838464!2d78.28976490000001!3d10.821166349999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710842193306!5m2!1sen!2sin"
          className={Styles.referMap}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          >
        </iframe>
      </p>
    </div>
  )
};
// exporting component using export default method
export default Main;