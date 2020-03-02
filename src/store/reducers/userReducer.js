const initUsers = {
  users: [
    {userId: 1, firstName: 'Conway', lastName: 'Liu'},
    {userId: 2, firstName: 'Janielle', lastName: 'Liu'},
    {userId: 3, firstName: 'Annabelle', lastName: 'Liu'}
  ],
  selectedUser: {}
}

const userReducer = (state = initUsers, action) => {
  // console.log("State in User Reducer: ", state)

  switch(action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.user]
      }
    case 'SELECT_USER':
      return {
        ...state,
        selectedUser: action.userId ? state.users.find(user => user.userId === action.userId) : null
      }
    default:
      return state
  }
}

export default userReducer