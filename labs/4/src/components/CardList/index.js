import React from 'react'
import data from '../../data.json'
import Card from '../Card/index.js'

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
    
    let cards = this.state.cards.filter((v) => v.title !== title)

    this.setState({cards})
}

//sets the state of generated cards with data from data.json using map
render(){
    return(
        <>
        {this.state.cards.map ((v) => {
            return <Card 

                key={v.title}

                title={v.title}
                
                content={v.content}

            deleteCard={() => this.deleteCard(v.title)}

        />})

    }

</>)

    }
}

export default CardList;