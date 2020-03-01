import React from 'react'

function TaskList({tasks, selectTask}) {
  let taskList =  tasks.map(task => (
    <li key={task.title} onClick={()=>{selectTask(task)}}>
      {task.title} ({task.assigned}) <br/>
      Due {task.dueDate} {task.completed ? 'completed' : null}
    </li>
  ))

  console.log(taskList)

  return (
    <div style={{border: "1px solid black", backgroundColor: "lightgreen", margin: "2px"}}>
      <ul>
      {taskList}
      </ul>
    </div>
  )
}

export default TaskList
