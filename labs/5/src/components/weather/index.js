import React from "react";
import Card from "../card/index.js";

class Weather extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            periods: []

        };
    }

    //function for deleting a card, used in Card/index.js
deleteCard(name){
    
    console.log("Card deleted!")
    
    console.log(this.state.periods)

//sets new card state once cards have been filtered
    
    let periods = this.state.periods.filter((i) => i.name !== name)

    this.setState({periods})
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
    render(){
        return(
            <>
            {this.state.periods.map ((i) => {
    
                return <Card 
    
                    key={i.number}
    
                    name = {i.name}

                    temperature = {i.temperature}

                    temperatureUnit = {i.temperatureUnit}

                    detailedForecast = {i.detailedForecast}
    
                    deleteCard={() => this.deleteCard(i.name)}
    
            />})
    
        }
    
    </>)
    
        }
    }
    
    
export default Weather;