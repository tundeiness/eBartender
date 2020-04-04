const GET_COCKTAILS_REQ = 'GET_COCKTAILS_REQUEST';
const GET_USER_REQ = 'GET_USER_REQ';
const GET_FAVOURITES_REQ = 'GET_FAVOURITE_REQ';
const FAVOURITE_COCKTAILS_REQ = 'FAVOURITE_COCKTAILS_REQ';
const GET_SINGLE_COCKTAIL_REQ = 'GET_SINGLE_COCKTAIL_REQ'


const getCocktails = cocktail => ({
  type: GET_COCKTAILS_REQ,
  payload: cocktail,
});

const getSingleCocktail = single => ({
  type: GET_SINGLE_COCKTAIL_REQ,
  payload: single,
});


const getFavouriteCocktails = favourites => ({
  type: GET_FAVOURITES_REQ,
  payload: favourites,
});

const favouriteCocktails = filter => ({
  type: FAVOURITE_COCKTAILS_REQ,
  payload: filter,
});

const getUser = user => ({
  type: GET_USER_REQ,
  payload: user,
});


export {
  getCocktails, getUser, getFavouriteCocktails, favouriteCocktails, getSingleCocktail
};
