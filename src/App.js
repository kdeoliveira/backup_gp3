import React, { Component} from "react";
import Todo from './Todo';
import AddForm from './AddForm';

export default class App extends Component{
  constructor(props){
    super(props);
    //State that holds temporarily data
    this.state = {
      todos : [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'react js test'},
      ],
    }
  }

  //Callback functions

  deleteTodoCallback = (id) => {
    let nextTodos = this.state.todos.filter(todo =>{
      return todo.id !== id;
    });
    this.setState({
      todos: nextTodos,
    })
  }

  addTodoCallback = (item) => {
    item.id = Math.random();
    let nextTodo = [...this.state.todos, item];
    this.setState({
      todos: nextTodo,
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center bue-text">Todo's</h1>
        <Todo todos={this.state.todos} onDelete={this.deleteTodoCallback}/>
        <AddForm onAdd={this.addTodoCallback}/>
      </div>
    );
  }
}

