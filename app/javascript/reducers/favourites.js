const favouritesReducer = (state = null, action) => {
  switch (action.type) {
    case 'FAVE':
      return action.payload;
    case 'ADD_FAVE':
      return action.payload;
    default:
      return state;
  }
};

export default favouritesReducer;
