import React from 'react'
import cardData from '../../data.json'
import Card from '../Card/index.js'

class CardList extends React.Component {
constructor (props){
    super(props)
    this.state = {
        cardData: cardData.cards
        }
    }
deleteCard(title){

    let cardData = this.state.cardData

    cardData = cardData.filter((v) => v.title !== title)

    this.setState({cardData})
}
render(){
    return(
        <>
        {this.state.cardData.map ((v) => <Card key={v.title}
        title={v.title}
        content={v.content}
        cardData={this.state.cardData}
        deleteCard={() => this.deleteCard(v.title)}

        />)

    }

</>)

    }
}

export default CardList;