import React from 'react';
import Task from './components/task/Task'
import User from './components/user/User'
import './App.css';

function App() {
  return (
    <div className="App">
      <p>The <b>Task</b> and <b>User</b> components demonstrates two different ways of passing state to child components. However, this difference is transparent to the user on the UI.</p>
      <p>The child components in the <b>Task</b> component each access the state in the store by themselves, while the <b>User</b> component accesses the state in the Redux store and pass down the data to the child components as props.</p>
      <Task/>
      <User/>
    </div>
  );
}

export default App;
