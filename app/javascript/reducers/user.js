const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_USER_REQ':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
