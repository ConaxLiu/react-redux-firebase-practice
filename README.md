
## **Step 1: Setup Redux in a React App**

```
npm install redux react-redux.
```

## **Step 2: Create Reducers**
Create the reducers that will be passed into the Redux store. 
If multiple reducers are required, create a root reducer to combine the reducers together. 
 
### **For single reducer**
```javascript
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
```

### **For multiple reducers**
```javascript
import { combineReducers } from 'redux'; 
import taskReducer from './taskReducer' 
import userReducer from './userReducer' 

const rootReducer = combineReducers ( 
  { 
    taskReducer, 
    userReducer 
  } 
) 

export default rootReducer 
```

## **Step 3: Create Action Creators**
To update the state in the Redux store, we need to dispatch actions. Actions are just JSON objects with a compulsory property of *type*, and any other optional properties.

```javascript
{
  type: 'SELECT_TASK',
  taskTitle: 'Task 1' // A user Id
}
```

However, it is preferable to create Action Creators, which are functions that return actions. This allows code reuse if the same action can be dispatched from multiple components.
```javascript
export const selectTaskAction = (taskTitle) => {
  return {
    type: 'SELECT_TASK',
    taskTitle
  }
}
```

## **Step 4: Create the Redux Store**
```javascript
import { createStore } from 'redux' 
import { Provider } from 'react-redux'; 
import rootReducer from './store/reducers/rootReducer' 

const store = createStore(rootReducer); 

ReactDOM.render( 
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root') 
); 
```
 
When this is set up, the state in the store can then be accessed using **store.getState()**.

```javascript
storeState = store.getState() 
taskState = storeState.taskReducer 
userState = storeState.userReducer 
```

However, instead of calling **getState()** directly, the \<Provider> component that wraps the \<App> component automatically subscribes to the state changes in the store, and so we can use the **connect()** HOC to automatically update components with new state. 
 
## **Step 5: Connect components to the Redux Store**
For any component that needs to access the state in the store, either to read from the store or to dispatch an action to the store, use the **connect()** HOC.

```javascript
import { connect } from 'react-redux' 
import { selectTaskAction } from '../../store/actions/taskActions'

function TaskList({tasks, selectTask}) { 
  // Component rendering code goes here
} 

// Use mapStateToProp to pass the state to the component as a prop 
const mapStateToProp = state => { 
  return { 
    tasks: state.taskReducer.tasks 
  } 
} 

// Use mapDispatchToProp to pass a dispatch function to the component as a prop. Note that we are dispatching a task action creator function
const mapDispatchToProp = dispatch => { 
  return { 
    selectTask: taskTitle => dispatch(selectTaskAction(taskTitle)) 
  } 
} 

export default connect(mapStateToProp, mapDispatchToProp)(TaskList) 
```

 
 
 
