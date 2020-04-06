const cocktailReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_COCKTAILS_REQ':
      return action.payload;
    default:
      return state;
  }
};

export default cocktailReducer;
