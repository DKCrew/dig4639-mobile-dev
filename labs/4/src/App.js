import React from 'react';
import CardList from './components/CardList';
import'./App.css';

class App extends React.Component{
  //wrapped Cardlist in a div for easier style editing if needed
  render(){
    return(
      <div class= "cardApp">
      <CardList/>
      </div>
    );
  }
}


export default App;
