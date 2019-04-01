import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    return (
      <div>
        <ul className="task clearfix">
            <li className="task__item">
                <p className="task__count text-success">{this.props.complatedTasks}</p>
                <p className="task__status text-info">Completed</p>
            </li>
            <li className="task__item">
                <p className="task__count text-primary">{this.props.totalTasks}</p>
                <p className="task__status text-info">Total</p>
            </li>
            <li className="task__item">
                <p className="task__count text-error">{this.props.pendingTasks}</p>
                <p className="task__status text-info">Pending</p>
            </li>
        </ul>
      </div>
    )
  }
}

export default Counter
