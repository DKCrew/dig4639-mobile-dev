import React from 'react';
import logo from './logo.svg';
import './App.css';

const todoList1 = [
  { completed: true, priority: 1, content: 'Complete demo' },
  { completed: true, priority: 2, content: 'Complete demo' },
  { completed: false, priority: 1, content: 'Complete demo' }
]

function TodoItem(props) {
  return <p>{props.cotent}</p>
}

function App(){
  let array = todolist1.map((value) => 
<TodoItem content={value.content}
priority = {value.priority}  />
  )
  return(
    array
      );
}

export default App;