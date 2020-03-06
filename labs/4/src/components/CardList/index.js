import React from 'react'
import data from '../../data.json'
import Card from '../Card/index.js'

//attempted changes using title call method described in lab

class CardList extends React.Component {

    constructor (props){

        super(props)

    this.state = {
        
        cards: data.cards
        
        }
    }
//function for deleting a card, used in Card/index.js
deleteCard(title){
    
    console.log("Card deleted!")
    
    console.log(this.state.cards)

//sets new card state once cards have been filtered
    
    let cards = this.state.cards.filter((i) => i.title !== title)

    this.setState({cards})
}

//sets the state of generated cards with data from data.json using map

render(){
    return(
        <>
        {this.state.cards.map ((i) => {

            return <Card 

                key={i.title}

                title={i.title}
                
                content={i.content}

            deleteCard={() => this.deleteCard(i.title)}

        />})

    }

</>)

    }
}

export default CardList;