import React from 'react'
import { connect } from 'react-redux'
import { selectTaskAction } from '../../store/actions/taskActions'

function TaskList({tasks, selectTask} ) {
  let taskList = tasks.map(task => (
    <li key={task.title} onClick={() => selectTask(task.title)}>
      {task.title} ({task.assigned}) <br/>
      Due {task.dueDate} {task.completed ? 'completed' : null}
    </li>
  ))

  return (
    <div style={{border: "1px solid black", backgroundColor: "lightgreen", margin: "2px"}}>
      <ul>{taskList}</ul>
    </div>
  )
}

const mapStateToProp = state => {
  return {
    tasks: state.taskReducer.tasks
  }
}

const mapDispatchToProp = dispatch => {
  return {
    selectTask: taskTitle => dispatch(selectTaskAction(taskTitle))
  }
}
export default connect(mapStateToProp, mapDispatchToProp)(TaskList)
