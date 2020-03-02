import React from 'react'
import TaskList from './TaskList'
import ViewTask from './ViewTask'
import AddTask from './AddTask'

function Task() {
  return (
    <div id="tasks">
    <p><b>Task</b> component, containing <b>TaskList</b>, <b>ViewTask</b>, and <b>AddTask</b> child components</p>
    <p>The data in the <b>ViewTask</b> component is updated when user clicks a task in the <b>TaskList</b> component.</p>
      <TaskList />
      <ViewTask />
      <AddTask />
    </div>
  )
}

export default Task
