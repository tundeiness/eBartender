import { combineReducers } from 'redux';
import cocktailReducer from './cocktail';
// TODO import singleCocktailReducer from './singleCocktail';
import userReducer from './user';
import favouriteCocktailsReducer from './favouriteCocktails';

const rootReducer = combineReducers({
  cocktails: cocktailReducer,
  // TODO singleCocktail: singleCocktailReducer,
  currUser: userReducer,
  userFavourites: favouriteCocktailsReducer,
});

export default rootReducer;
