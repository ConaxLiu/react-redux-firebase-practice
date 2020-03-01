import React from 'react'

function UserList({users, selectUser}) {
  let userList =  users.map(user => (
    <li key={user.userId} onMouseOver={()=>{selectUser(user)}} onMouseOut={()=>{selectUser(null)}} >
      {user.userId}: {user.firstName}  {user.lastName}
    </li>
  ))

  console.log(userList)

  return (
    <div style={{border: "1px solid black", backgroundColor: "lightgreen", margin: "2px"}}>
      <ul>
      {userList}
      </ul>
    </div>
  )
}

export default UserList
