export const addUserAction = (user) => {
  return {
    type: 'ADD_USER',
    user
  }
}

export const selectUserAction = (userId) => {
  return {
    type: 'SELECT_USER', 
    userId
  }
}