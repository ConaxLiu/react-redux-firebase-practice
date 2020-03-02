import React, {useState} from 'react'
import TaskList from './TaskList'
import ViewTask from './ViewTask'
import AddTask from './AddTask'

function Task() {
  const initTasks = [
    {title: 'Task 1', assigned: 1, dueDate: '1/3/2020', completed: false},
    {title: 'Task 2', assigned: 2, dueDate: '2/3/2020', completed: false},
    {title: 'Task 3', assigned: 3, dueDate: '3/3/2020', completed: false}
  ]
  const [tasks, setTasks] = useState(initTasks)

  const [selectedTask, setSelectedTask] = useState(initTasks[0])

  const addTask = (task) => {
    const newTasks = [
      ...tasks,
      task
    ]

    setTasks(newTasks)
  }

  return (
    <div id="tasks">
      <p><b>Task</b> component, containing <b>TaskList</b>, <b>ViewTask</b>, and <b>AddTask</b> child components</p>
      <p>The data in the <b>ViewTask</b> component is updated when user clicks a task in the <b>TaskList</b> component.</p>
      <TaskList tasks={tasks} selectTask={setSelectedTask} />
      <ViewTask selectedTask={selectedTask} />
      <AddTask addTask={addTask}/>
    </div>
  )
}

export default Task
