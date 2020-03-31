import React from 'react';
import Weather from './components/weather';
import'./App.css';

class App extends React.Component{
  //wrapped CardList in a div for easier style editing if needed
  render(){
    return(
      <div className= "cardApp">
      <Weather/>
      </div>
    );
  }
}


export default App;
