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

    let cards = this.state.cards

    cards = cards.filter((v) => v.title !== title)

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