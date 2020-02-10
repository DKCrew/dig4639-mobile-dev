import React from 'react';
import logo from './logo.svg';
import './App.css';
//simple way to render components other than class
function NameBadge(){
  return (
    <p>The sum is {10+25}</p>
  )
}

/*
class NameBadge extends React.Component { //property of react module
  constructor(props){
    super(props);
  }
  render(){
    return ( //curly brackets are used in to insert JS into a jsx
              //elements, like template literal without $
    <p>The sum is {10 +15}</p>
    )
  }
}
*/
class App extends React.Component{
  constructor(props) {
    super(props); //props is a requirement if you change super in
                  //react
  }
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameBadge name="Dennis"/> 
        <p>
          Wello Horld
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
