import React from 'react';
import {Card, Button} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import questions from './questions.json'

const TITLE_STATE = 0

const QUESTION_STATE = 1

export default class App extends React.Component {

  constructor(props){

    super()

    this.state ={

      thisState: TITLE_STATE,

      thisQuestion: 0,

      score: 0,

    }

  }

  nextQuestion(i){

    if (i.correct){

      this.setState({counter: this.state.score + 1})

    }
    this.setState({thisQuestion: this.state.thisQuestion + 1})
  }
    
  render(){

    return(

      <Card style = {styles.container}>

        {(this.state.thisState === TITLE_STATE) ?
        
        <>
          <Text style={styles.text}>

          Just a straighforward Games Quiz, for Lab 6
          
          </Text>

          <Button title="Start Quiz" 

          style={styles.button}

          onPress={ () => this.setState({thisState: QUESTION_STATE})}

          />

          </>
 : (this.state.currentQuestion < questions.length) ?

 <>

   <Text 
   
   style={styles.text}>
     
     {questions[this.state.currentQuestion].question}
     
     </Text>

   <View>

     {questions[this.state.thisQuestion].answers.map((ans, i) => {

       return <Button style = {styles.button} 
       
       title = {ans.text} 
       
       key = {i} 
       
       onPress={() => this.nextQuestion(ans)} />
       
          }
        )
     }

   </View>
 </>
  
  :

  <>

  <Text style = {styles.text}>
    
    Quiz Complete!

  </Text>

  <Text style = {styles.text}>
    
    You Scored: {this.state.score}{questions.length}
    
  </Text>

  <Button style = {styles.button}

  title = "Try it Again!"

  onPress={() => this.setState(
    
    { thisState: TITLE_STATE, thisQuestion: 0, score: 0 })}/>

  </>

  }

</Card>

    )

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "antiqueWhite",
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    padding: 8,
    backgroundColor: "brown"
  },

  text: {
    padding: 8,
    textAlign: "center",
    fontWeight: "bold:",
    fontSize: 22,
    color: "white"

  }
});
