import React, { Component } from 'react';
import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

// Components
import ToDos from './components/ToDos';
import Header from './components/layout/Header';
import Counter from './components/Counter';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Learn HTML & CSS",
        complated: true
      },
      {
        id: uuid.v4(),
        title: "Learn Responsive design",
        complated: false
      },
      {
        id: uuid.v4(),
        title: "Learn Javascript",
        complated: false
      }
    ],
    complatedTasks: 0,
    totalTasks: 0,
    pendingTasks: 0
  }

  // on load app function
  componentWillMount = () => {
    this.counter();
  }

  // Make or check tasks complated function
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.complated = !todo.complated
      }
      return todo;
    })});
    this.counter();
  }

  // Delate task from list
  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)});
    // console.log(id);
    this.counter();
  }

  // Add ToDo Function
  addToDo = (title) => {
    console.log(this.state.todos.length);
    const newToDo = {
      id: uuid.v4(),
      title: title,
      complated: false
    }
    this.setState({ todos: [...this.state.todos, newToDo]});
    this.counter();
  }
  
  // counter of tasks function
  counter = () => {
    setTimeout(() => {
      this.setState({ totalTasks: this.state.todos.length });
      this.setState({ complatedTasks: this.state.todos.filter(todo => todo.complated !== false).length });
      this.setState({ pendingTasks: this.state.todos.filter(todo => todo.complated === false).length });
    }, 500);
  }
  

  render() {

    return (
<Router>      
  <div className="todoList">
    <Header />
    <Route path="/" exact render={props => (
      <React.Fragment>
        <AddToDo addToDo={this.addToDo} />
        <div className="profile">
          <Counter 
            totalTasks={this.state.totalTasks}
            complatedTasks={this.state.complatedTasks}
            pendingTasks={this.state.pendingTasks}
            />
          
          <ul className="task-list">
          <ToDos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </ul>
        </div>
      </React.Fragment>
    )} />
    <Route path="/about"  component={About}/>
    
  </div>
</Router>
    );
  }
}

export default App;
