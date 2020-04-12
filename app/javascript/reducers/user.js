
import { GET_USER_REQ } from '../actions/actionTypes';

const userReducer = (state = null, action) => {
  switch(action.type) {
      case GET_USER_REQ:
          return action.user;

      default:
          return state;
  }
}

export default userReducer;
