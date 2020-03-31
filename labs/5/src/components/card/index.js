import React from 'react';
import './index.css';

class Card extends React.Component{

    constructor(props){

        super(props)

        this.state =
        {
            name: '',

            temperature: 0,

            temperatureUnit: '',

            detailedForecast: ''

        };
    }

render() {

    return(

        <div className = "card">

            <h3>{this.props.name}</h3>

            <h3>{this.props.temperature}{this.props.temperatureUnit}</h3>

            <p>{this.props.detailedForecast}</p>

        </div>
        );

    }

}

export default Card;