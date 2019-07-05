import React from 'react';

const Weather = props => (
  <div className="weather__info"> 
      {
       props.city && props.country && props.region && <p className="weather__key">Location: 
       <span className="weather__value"> { props.city } , { props.region } , { props.country }</span>
       </p>
      }
      {/* if above all cond true then render out <p> tag */}

      { 
       props.temperature && <p className="weather__key">Temperature: 
       <span className="weather__value"> { props.temperature }</span>
       </p>
      }
      { 
       props.humidity && <p className="weather__key">Humidity: 
       <span className="weather__value"> { props.humidity } </span>
       </p>
      }
      {
       props.error && <p className="weather__error"> { props.error } </p>
      } 

     </div>
)

export default Weather;