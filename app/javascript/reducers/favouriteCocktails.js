import { GET_FAVOURITE_COCKTAILS_REQ } from '../actions/actionTypes';

const favouriteCocktailsReducer = (state = null, action) => {
  switch(action.type) {
      case GET_FAVOURITE_COCKTAILS_REQ:
        return {
          ...state,
          favourites: action.payload
        }
      default:
          return state;
  }
}



export default favouriteCocktailsReducer;
