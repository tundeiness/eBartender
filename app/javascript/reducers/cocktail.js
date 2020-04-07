
import { GET_COCKTAILS_REQ } from '../actions/actionTypes';

const cocktailReducer = (state = [], action) => {
  switch(action.type) {
      case GET_COCKTAILS_REQ:
          return action.cocktails;

      default:
          return state;
  }
}


export default cocktailReducer;



