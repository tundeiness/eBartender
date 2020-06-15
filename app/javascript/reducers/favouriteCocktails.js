import { GET_FAVOURITE_COCKTAILS_REQ } from '../actions/actionTypes';

const favouriteCocktailsReducer = (state = [], action) => {
  switch(action.type) {
      case GET_FAVOURITE_COCKTAILS_REQ:
        return action.favourites;

      default:
          return state;
  }
}



export default favouriteCocktailsReducer;
