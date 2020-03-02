import React from 'react'

function ViewUser({selectedUser}) {
  return (
    selectedUser === null ? 
    <div style={{border: "1px solid black", backgroundColor: "lightblue", margin: "2px"}}>
      <div>ID: </div>
      <div>First Name: </div>
      <div>Last Name: </div>
    </div>
    : 
    <div style={{border: "1px solid black", backgroundColor: "lightblue", margin: "2px"}}>
      <div>ID: {selectedUser.userId}</div>
      <div>First Name: {selectedUser.firstName}</div>
      <div>Last Name: {selectedUser.lastName}</div>
    </div>
  )
}

export default ViewUser
