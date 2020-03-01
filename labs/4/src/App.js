import React from 'react';
import CardList from './components/CardList';
import'./App.css';

function App(){
  //wrapped Cardlist in a div for easier style editing if needed
    return(
      <div class= "cardApp">
      <CardList/>
      </div>
  )
  }


export default App;
