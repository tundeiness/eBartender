
import { GET_COCKTAILS_REQ, CREATE_COCKTAIL } from '../actions/actionTypes';

const cocktailReducer = (state = [], action) => {
  switch(action.type) {
      case GET_COCKTAILS_REQ:
          return action.cocktails;
      case CREATE_COCKTAIL:
          return [...state, action.cocktail];
      default:
          return state;
  }
}


export default cocktailReducer;



