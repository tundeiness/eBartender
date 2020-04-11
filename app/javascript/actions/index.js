import { GET_COCKTAILS_REQ, GET_USER_REQ, GET_FAVOURITE_COCKTAILS_REQ } from './actionTypes';


const loadCocktails=(cocktails)=> {
  return { type: GET_COCKTAILS_REQ, cocktails: cocktails }
}


const getFavouriteCocktails=(favourites)=> {
  return { type: GET_FAVOURITE_COCKTAILS_REQ, favourites: favourites }
}



const getUser=(user)=> {
  return { type: GET_USER_REQ, user: user }
}


export {
  loadCocktails, getUser, getFavouriteCocktails,
};
