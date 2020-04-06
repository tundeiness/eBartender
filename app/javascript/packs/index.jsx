// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/index.css';
import Display from '../containers/Display';
import { createStore } from 'redux';
import rootReducers from '../reducers/index'


const STATES = {
  cocktails: [{
    name: 'Mudslide',
    description: 'Share this creamy adults-only drink with the chocolate lover in your life. For extra indulgence, grate over some chocolate before serving',
    ingredients: 'Dark Chocolate, Ice, Vodka, Irish cream liqueur, double cream',
    picture: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/mudslide.jpg?itok=okmSynXY',
  },
  {
    name: 'Pink negroni',
    description: 'Go pink with this fabulous cocktail flavoured with pink gin, rose vermouth and Aperol. Garnish with a wedge of pink grapefruit and a basil leaf to serve',
    ingredients: 'Pink Gin, Rose vermouth/White vermouth, Aperol, Ice, wedge of pink grapefruit, Basil leaf',
    picture: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/classic-negroni.jpg?itok=ZQ8f0t7P',
  },
  ],
  currUser: {
    username: 'joomla',
    email: 'joomla@example.com',
  },
  userFavourites: [{}],
};

const store = createStore(rootReducers, STATES);


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Display store={store} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
