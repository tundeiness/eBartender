import React from 'react';
import Home from './Home';
import Cocktails from './Cocktails';
import SingleCocktail from './SingleCocktail';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cocktails" component={Cocktails} />
          <Route exact path="/singlecocktail" component={SingleCocktail} />
        </Switch>
      </div>
    )
  }
}

export default App
