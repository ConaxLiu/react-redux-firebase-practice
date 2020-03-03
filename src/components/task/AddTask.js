import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTaskAction } from '../../store/actions/taskActions'

function AddTask({addTask}) {
  const [title, setTitle] = useState('')
  const [assigned, setAssigned] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [completed, setCompleted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    addTask({
      title,
      assigned,
      dueDate,
      completed
    })
  }

  return (
    <form onSubmit={handleSubmit} style={{border: "1px solid red", backgroundColor: "yellow", margin: "2px" }}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="assigned">Assign To</label>
        <input type="text" name="assigned" id="assigned" value={assigned} onChange={e => setAssigned(parseInt(e.target.value))}/>
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input type="text" name="dueDate" id="dueDate" value={dueDate} onChange={e => setDueDate(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="completed">Completed</label>
        <input type="checkbox" name="completed" id="completed" checked={completed} onChange={e => setCompleted(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="button"></label>
        <button>Add Task</button>
      </div>
    </form>
  )
}

const mapDispatchToProp = dispatch => {
  return {
    addTask: task => {
      dispatch(addTaskAction(task))
    }
  }
}

export default connect(null, mapDispatchToProp)(AddTask)
