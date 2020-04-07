import { GET_COCKTAILS_REQ, GET_USER_REQ, GET_FAVOURITES_REQ, FAVOURITE_COCKTAILS_REQ } from './actionTypes';


const loadCocktails=(cocktails)=> {
  return { type: GET_COCKTAILS_REQ, cocktails: cocktails }
}

// TODO  const getSingleCocktail = single => ({type: GET_SINGLE_COCKTAIL_REQ, payload: single,});


const getFavouriteCocktails=(favourites)=> {
  return { type: GET_FAVOURITES_REQ, favourites: favourites }
}

const favouriteCocktails = filter => ({
  type: FAVOURITE_COCKTAILS_REQ,
  payload: filter,
});


const getUser=(user)=> {
  return { type: GET_USER_REQ, user: user }
}


export {
  loadCocktails, getUser, getFavouriteCocktails, favouriteCocktails
};
