import React, { Component } from 'react';
import PropTypes from 'prop-types';
import delIcon from './../assets/img/icon-del.png';

export class ToDoItem extends Component {
    getStyle = () => {
        return {
            background: "#eee",
            padding: "10px",
            borderBottom: "1px solid #ccc",
            textDecoration: this.props.todo.complated ? 'line-through' : 'none'
        }
    }

  render() {
    return (
    <li className={"list__item " +  (this.props.todo.complated ? 'list__item--completed' : ' ') }>
      <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)} />
      <span></span>
      <p className="item__title text-primary">{ " " + this.props.todo.title}</p>
      <button className="delBTN" style={delBtn} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>
        <img src={delIcon} alt="..." />
      </button>
    </li>
    )
  }
}

// PropTypes
ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

  const delBtn = {
    // background: 'red',
    // color: '#fff',
    // padding: '5px 9px',
    // textAlign: 'center',
    // float: 'right',
    // borderRadius: '50%',
    // border: '0'
  }

export default ToDoItem
