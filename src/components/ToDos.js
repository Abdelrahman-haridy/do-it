import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends Component {
  render() {
    return this.props.todos.map((todo , index) => (
      <ToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} /> 
    ));
  }
}


// PropTypes
ToDos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default ToDos;
