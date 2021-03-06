import React from 'react';
import './App.css';
import todoList from './todoList.json' 

class TodoItem extends React.Component{
  render(props){
  return <p className='card'>{props.content}</p>
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
    todoList: todoList,
    showOnlyUncompletedTasks: false
  }
  this.currentID = 4
}

removeTask(){

let newList = this.state.todoList.filter((task)=>(task.id != taskID))
this.setState({todoList:newList})
}

addTask(){
  console.log(this.refs.taskContent.value)
 let newTask =
 { "id":this.state.currentID,
 "content": "Task 3", "priority": 3, "completed": false }
 this.currentID++;
 let currentList = this.state.todoList
 currentList.push(newTask)
 this.setState({todoList:currentList})
}

render() {
  return (
  <>
  <div className= "inputTask">
    <input type ="text" ref="taskContent"/>
    <select ref = "priority" name="priority">
      <option value = "1">1</option>
      <option value = "2">2</option>
      <option value = "3">3</option>
    </select>
    <input type="button" value="Add Task" onClick={() => this.addTask()}/>
    <input type="checkbox" ref="showOnlyUncompletedTasks" 
      onChange={(e) => this.setState({showOnlyUncompletedTasks: e.target.checked})}
      id="showOnlyUncompletedTasks"
      name ="showOnlyUncompletedTasks" value = "completed" />
    
    <label htmlFor="showOnlyUncompletedTasks"> Show only uncompleted tasks</label>
    </div>
    {(this.state.showOnlyUncompletedTasks ? 
    this.state.todoList.filter((v) => v.completed) : this.state.todoList)
    .map((v, i) => <TodoItem key ={i} priority={v.priority} 
      removeTask={(id) => this.removeTask(id)}
      
      content={v.content} completed={v.completed}/>)
    }
    
  </>
  );
}
}
export default App;