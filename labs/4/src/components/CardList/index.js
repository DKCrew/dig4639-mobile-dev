import React from 'react'
import data from '../../data.json'
import Card from '../Card/index.js'

class CardList extends React.Component {
constructor (props){
    super(props)

    this.state = {

        data: data.cards
        
        }
    }
//function for deleting a card, used in Card/index.js
deleteCard(title){

    let data = this.state.data

    data = data.filter((v) => v.title !== title)

    this.setState({data})
}

//sets the state of generated cards with data from data.json using map
render(){
    return(
        <>
        {this.state.data.map ((v) => {
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