import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component{
  state = {
    // inital state of all this property
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    region: undefined,
    error: undefined  
  }
  getWeather = async  (e) => {
    e.preventDefault();
    //e.preventDefault(); simplifies single page app 
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.apixu.com/v1/current.json?key=f3202b9d9ea34f868f3120440180206&q=${city},${country}`);
    const data = await api_call.json();
    //console.log(data);
    if(city && country){
      this.setState({
        temperature: data.current.temp_c,
        city: data.location.name,
        country: data.location.country,
        humidity: data.current.humidity,
        region: data.location.region,
        error: ''
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        region: undefined,
        error: 'Please enter Values to get data'
      });

    }
}

  
  render(){
    return(
     <div> 
       <div className="wrapper">
         <div className="main">
           <div className="container">
             <div className="row">
              <div className="col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-xs-7 form-container">
              <Form getWeather={this.getWeather} />
              <Weather 
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              region={this.state.region}
              error={this.state.error}
              />
              </div>
             </div>
           </div>
         </div>
       </div>
     </div>
    );
  }
}
       
export default App;