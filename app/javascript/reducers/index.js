import { combineReducers } from 'redux';
import cocktailReducer from './cocktail';
import userReducer from './user';
import favouriteCocktailsReducer from './favouriteCocktails';

const rootReducer = combineReducers({
  cocktails: cocktailReducer,
  currUser: userReducer,
  favourites: favouriteCocktailsReducer,
});

export default rootReducer;
