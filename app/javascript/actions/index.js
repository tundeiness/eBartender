import { GET_COCKTAILS_REQ, GET_USER_REQ, GET_FAVOURITE_COCKTAILS_REQ, CREATE_COCKTAIL } from './actionTypes';


const loadCocktails=(cocktails)=> {
  return { type: GET_COCKTAILS_REQ, cocktails: cocktails }
}


const getFavouriteCocktails = favourites => ({ type: GET_FAVOURITE_COCKTAILS_REQ, favourites });


const getUser=(user)=> {
  return { type: GET_USER_REQ, user: user }
}


const createCocktail = cocktail => ({ type: CREATE_COCKTAIL, cocktail });

export {
  loadCocktails, getUser, getFavouriteCocktails, createCocktail,
};
