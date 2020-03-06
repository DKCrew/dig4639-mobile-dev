import React from 'react';
import CardList from './components/CardList';
import'./App.css';

class App extends React.Component{
  //wrapped CardList in a div for easier style editing if needed
  render(){
    return(
      <div className= "cardApp">
      <CardList/>
      </div>
    );
  }
}


export default App;
