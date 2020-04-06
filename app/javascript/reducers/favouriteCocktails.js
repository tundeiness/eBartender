const favouriteCocktailsReducer = (state = null, action) => {
  switch (action.type) {
    case 'FAVOURITE_COCKTAILS_REQ':
      return action.payload;
    default:
      return state;
  }
};

export default favouriteCocktailsReducer;
