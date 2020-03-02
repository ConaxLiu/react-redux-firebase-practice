import React, {useState} from 'react'
import UserList from './UserList'
import ViewUser from './ViewUser'
import AddUser from './AddUser'

function User() {
  const initUsers = [
    {userId: 1, firstName: 'Conway', lastName: 'Liu'},
    {userId: 2, firstName: 'Janielle', lastName: 'Liu'},
    {userId: 3, firstName: 'Annabelle', lastName: 'Liu'}
  ]
  const [users, setUsers] = useState(initUsers)
  const [selectedUser, setSelectedUser] = useState(initUsers[0])

  const addUser = (user) => {
    const newUsers = [
      ...users,
      user
    ]

    setUsers(newUsers)
  }

  return (
    <div id="users">
      <p><b>User</b> component, containing <b>UserList</b>, <b>ViewUser</b>, and <b>AddUser</b> child components.</p>
      <p>The data in the <b>ViewUser</b> component is updated when user hovers mouse over a user in the <b>UserList</b> component.</p>
      <UserList users={users} selectUser={setSelectedUser} />
      <ViewUser selectedUser={selectedUser} />
      <AddUser addUser={addUser}/>
    </div>
  )
}

export default User
