import React, { Component } from 'react'

export default class ToDoApp extends Component {

    constructor(){
        super()
        this.state={
            todos:[],
            currentToDo : " " ,
        }
    }

  handleAddTodo=()=>{
  if(this.state.currentToDo.trim()=== '')return;
  this.setState((prevState)=>({
     todos:[...prevState.todos,prevState.currentToDo],
     currentToDo:''
  }))
    }

    handleInputChange=(event)=>{
     this.setState({currentToDo:event.target.value})
    }
    handleRemoveToDo=(index)=>{
      this.setState((prevState)=>{
        const todos =[...prevState.todos]
        todos.splice(index,1)
        return {todos};
      })
      }
      
    
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <input type="text" value={this.state.currentToDo}  placeholder='Add a new todo' onChange={this.handleInputChange} />
        <button onClick={this.handleAddTodo}>Add Todo</button>
<ul>
{this.state.todos.map((todo,index)=>(
  <li key={index}>{todo}
  <button onClick={()=>this.handleRemoveToDo(index)}>Remove</button>
  </li>
))} 
</ul>
      </div>
    )
  }
}
