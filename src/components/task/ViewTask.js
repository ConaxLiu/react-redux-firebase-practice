import React from 'react'

function ViewTask({selectedTask}) {
  return (
    <div style={{border: "1px solid black", backgroundColor: "lightblue", margin: "2px"}}>
      <div>Title: {selectedTask.title}</div>
      <div>Assigned: {selectedTask.assigned}</div>
      <div>Due Date {selectedTask.dueDate}</div>
      {selectedTask.completed ? <div>Completed</div> : null}
    </div>
  )
}

export default ViewTask
