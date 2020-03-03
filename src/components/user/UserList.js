import React from 'react'
import { connect } from 'react-redux'
import { selectUserAction } from '../../store/actions/userActions'

function UserList({users, selectUser}) {
  let userList =  users.map(user => (
    <li key={user.userId} onMouseOver={()=>{selectUser(user.userId)}} onMouseOut={()=>{selectUser(null)}} >
      {user.userId}: {user.firstName}  {user.lastName}
    </li>
  ))

  return (
    <div style={{border: "1px solid black", backgroundColor: "lightgreen", margin: "2px"}}>
      <ul>
      {userList}
      </ul>
    </div>
  )
}

const mapDispatchToProp = dispatch => {
  return {
    selectUser: userId => dispatch(selectUserAction(userId))
  }
}

export default connect(null ,mapDispatchToProp)(UserList)
