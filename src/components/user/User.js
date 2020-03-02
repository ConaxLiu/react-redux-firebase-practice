import React from 'react'
import UserList from './UserList'
import ViewUser from './ViewUser'
import AddUser from './AddUser'
import { connect } from 'react-redux'

function User({users, selectedUser}) {
  return (
    <div id="users">
      <p><b>User</b> component, containing <b>UserList</b>, <b>ViewUser</b>, and <b>AddUser</b> child components.</p>
      <p>The data in the <b>ViewUser</b> component is updated when user hovers mouse over a user in the <b>UserList</b> component.</p>
      <UserList users={users} />
      <ViewUser selectedUser={selectedUser} />
      <AddUser />
    </div>
  )
}

const mapStateToProp = state => {
  return {
    users: state.userReducer.users,
    selectedUser: state.userReducer.selectedUser
  }
}

export default connect(mapStateToProp)(User)
