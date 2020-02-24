import React from 'react';
import Card from './components/Card';
import'./App.css';

class App extends React.Component{
  render(){
    return(
      <Card content="This is a card!"></Card>
  );
  }
}

export default App;
