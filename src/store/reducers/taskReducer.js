const initTasks = {
  tasks:[
    {title: 'Task 1', assigned: 1, dueDate: '1/3/2020', completed: false},
    {title: 'Task 2', assigned: 2, dueDate: '2/3/2020', completed: false},
    {title: 'Task 3', assigned: 3, dueDate: '3/3/2020', completed: false}
  ],
  selectedTask: {}
}

const taskReducer = (state = initTasks, action) => {
  switch(action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      }
    
    case 'SELECT_TASK':
      let newSelectedTask = state.tasks.find(task => task.title === action.taskTitle)

      return {
        ...state,
        selectedTask: newSelectedTask
      }

    default:
      return state
  }
}

export default taskReducer