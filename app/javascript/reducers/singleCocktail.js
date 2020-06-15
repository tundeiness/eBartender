const singleCocktailReducer = (state = null, action) => {
  switch (action.type) {
    case 'GET_SINGLE_COCKTAIL_REQ':
      return action.payload;
    default:
      return state;
  }
};

export default singleCocktailReducer;
