import React from "react";
import Card from "../card/index.js";

class Weather extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            periods: []

        };
    }

    componentDidMount(){
        fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")

        .then(res => res.json())

        .then((result) => {
         
         this.setState({
             periods : result.properties.periods
         });

        })

        .catch((error) => {console.log(error)});

    }

    render() {

        return(

          <div>

          {
                this.state.periods.map((v) => 

                <Card key = {v.number}

                name = {v.name}

                temperature = {v.temperature}

                temperatureUnit = {v.temperatureUnit}

                detailedForecast = {v.detailedForecast} />)}
            
            }

          </div>
          
        )
      }
    
    }

export default Weather;