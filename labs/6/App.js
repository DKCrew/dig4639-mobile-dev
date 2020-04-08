import React from 'react';
import {Card, Button} from 'react-native-elements';
import {StyleSheet, Text, View} from 'react-native';
import questions from './questions.json'

const TITLE_STATE = 0

const QUESTION_STATE = 1

const TIME_LIMIT = 60


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

      <View style = {styles.container}>

        {(this.state.thisState === TITLE_STATE) ?
        
        <>
          <Text style={styles.text}>

          Just a straighforward Games Quiz, for Lab 6
          
          </Text>

          <Button title="Start Quiz" 

          buttonStyle={styles.button}

          onPress={ () => this.setState({thisState: QUESTION_STATE})}

          />

          </>

          : (this.state.thisQuestion < questions.length) ?

          <>

          <Text style = {styles.text}>

            {questions[this.state.thisQuestion].question}

          </Text>

          <View>

            {questions[this.state.thisQuestion].answers.map}((ans, i))

          </View>

          </>
      }
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
