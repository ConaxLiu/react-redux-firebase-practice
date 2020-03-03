
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

## **Step 3: Create the Redux Store**

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

However, instead of calling **getState()** ourselves, the \<Provider> component that wraps the \<App> component automatically subscribes to the state changes in the store, and so we can use the **connect()** HOC to automatically update components with new state. 
 
## **Step 4: Connect components to the Redux Store**

For any component that needs to access the state in the store, either to read from the store or to dispatch an action to the store, use the **connect()** HOC: 

```javascript
import { connect } from 'react-redux' 

function TaskList({tasks, selectTask}) { 
  // Component code goes here
} 

// Use mapStateToProp to pass the state to the component as a prop 
const mapStateToProp = state => { 
  return { 
    tasks: state.taskReducer.tasks 
  } 
} 

// Use mapDispatchToProp to pass a dispatch function to the component as a prop 
const mapDispatchToProp = dispatch => { 
  return { 
    selectTask: taskTitle => dispatch({
      type: 'SELECT_TASK', 
      taskTitle: taskTitle
    }) 
  } 
} 

export default connect(mapStateToProp, mapDispatchToProp)(TaskList) 
```

 
 
 
