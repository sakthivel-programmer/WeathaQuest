// importing CSS module
import Styles from "./details_panel.module.css";
// importing IMAGE that is used for no report screen
import No_report from "../images/no_report.png"
// importing selectore function from weather slice to specify in useSelector
import { selectWeather, setLoading } from "../features/weather/weatherSlice";
// importing selector in-order to access App store data 
import { useSelector } from "react-redux";
// Loader animation component
import Loading from "./Loading";
// functional component
function DetailsPanel(){
  // destructring weatherReport that fetched from store using useSelector
  const { weatherReport,loading } = useSelector(selectWeather);
  // initially returing NO REPORT message when weatherReport is an empty string 
  if(weatherReport === ""){

    return(
      
      <div className={Styles.no_report_message_div}>

        <p className={Styles.no_report_message}>
          No reports
        </p>

        <img src={No_report} alt="No report"/>

      </div>
    )
  }
  // if loading state stands true render the loading animation
  if(loading){

    return(

      <Loading/>
      
    )
  }
  // JSX code that going to be rendered
  return (

    <div className={Styles.details_panel}>

      <p className={Styles.location_name}>{weatherReport.location.name}</p>
      {/* loop through daily basis weather report that fetch from tomorrow.io API */}
      { weatherReport.timelines.daily.map((day,i)=>(

        <div className={Styles.report_div}>

          <div className={Styles.day_details}>

            <p> { day.time.slice(0,10)} </p>

          </div>

          <div className={Styles.day_and_hour_report}>

            <div className={Styles.day_report}>

              <div className={Styles.weather_detail}>

                <span className={Styles.weather_category}>
                  Average Temperature
                </span>

                <span className={Styles.weather_data}>
                  {day.values.temperatureAvg}℃
                </span>

              </div>

              <div className={Styles.weather_detail}>

                <span className={Styles.weather_category}>
                  Average WindSpeed
                </span>

                <span className={Styles.weather_data}>
                  {day.values.windSpeedAvg} km/h
                </span>

              </div>

              <div className={Styles.weather_detail}>

                <span className={Styles.weather_category}>
                  Average Rain Accumulation
                </span>

                <span className={Styles.weather_data}>
                  {day.values.rainAccumulationAvg} mm
                </span>

              </div>

            </div>
            
            <div className={Styles.hour_report}>

              <div className={Styles.hour_report_heading}>

                  <span style={{marginTop: "-5px"}}>
                    Hourly Basis
                  </span>

                  <p style={{fontSize:".7rem"}}>
                    &nbsp;(24hrs)
                  </p>

              </div>
              
              <div className={Styles.hour_reports_collection}>
                {/* loop through hourly basis weather report on each day 24hrs */}
                { weatherReport.timelines.hourly.map((hour,i)=>(
                  <>
                  
                  {/* condition that allows only hour those hour report on that particular day */}

                  {day.time.slice(0,10) === hour.time.slice(0,10)
                    ?
                    <>
                      <div className={Styles.hour_by_hour}>

                        <div className={Styles.timing}>
                          {hour.time.slice(11,16)}
                        </div>

                        <div className={Styles.weather_detail_hour}>

                          <span className={Styles.weather_category_hour}>
                            Average Temperature
                          </span>

                          <span className={Styles.weather_data_hour}>
                            {hour.values.temperature}℃
                          </span>

                        </div>

                        <div className={Styles.weather_detail_hour}>

                          <span className={Styles.weather_category_hour}>
                            Average WindSpeed
                          </span>

                          <span className={Styles.weather_data_hour}>
                            {hour.values.windSpeed} km/h
                          </span>

                        </div>

                        <div className={Styles.weather_detail_hour}>

                          <span className={Styles.weather_category_hour}>
                            Average Rain Accumulation
                          </span>

                          <span className={Styles.weather_data_hour}>
                            {hour.values.rainAccumulation} mm
                          </span>

                        </div>

                      </div>

                    </>
                    :
                      null
                    }
                  </>
                ))}

              </div>

            </div>

          </div>

        </div>

      ))}
      
      
    </div>

  )

};
// exporting component using export default method
export default DetailsPanel;
