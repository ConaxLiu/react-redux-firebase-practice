export const addTaskAction = (task) => {
  return {
    type: 'ADD_TASK',
    task
  }
}

export const selectTaskAction = (taskTitle) => {
  return {
    type: 'SELECT_TASK',
    taskTitle
  }
}