import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addUserAction } from '../../store/actions/userActions'

function AddUser({addUser}) {
  const [userId, setUserId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    addUser({
      userId: parseInt(userId),
      firstName,
      lastName
    })
  }

  return (
    <form onSubmit={handleSubmit} style={{border: "1px solid red", backgroundColor: "yellow", margin: "2px" }}>
      <div>
        <label htmlFor="userId">User Id</label>
        <input type="text" name="userId" id="userId" value={userId} onChange={(e)=>setUserId(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
      </div>

      <div>
        <label htmlFor="button"></label>
        <button>Add User</button>
      </div>
    </form>
  )
}

const mapDispatchToProp = dispatch => {
  return {
    addUser: user => {
      dispatch(addUserAction(user))
    }
  }
}

export default connect(null, mapDispatchToProp)(AddUser)
