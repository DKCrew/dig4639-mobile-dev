import React from 'react';
import './index.css';

class Card extends React.Component{
    constructor(props){
        super(props)
        this.props = props
    }
    //renders an element (x) that closes a card after being clicked
render() {
    return(
        <div className="card">

            <span onClick={() => this.props.deleteCard(this.props.title)}

                className="Close">X</span>

                <h3>{this.props.title}</h3>

             <p>{this.props.content}</p>

            </div>
    );

    }
}

export default Card;
