import React from 'react';
import Home from './Home';
// import Cocktails from './Cocktails';
// import Cocktails from './CocktailList;
import Cocktails from './CocktailList';
import SingleCocktail from './SingleCocktail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
// import Cocktails from './CocktailList';
// import { favouriteCocktails } from '../actions/index';
// import SingleCocktail from './SingleCocktail';
import Userfaves from './UserFave';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route exact path="/cocktails" component={Cocktails} />
            {/* <Route exact path="/singlecocktail" component={SingleCocktail} /> */}
            <Route path="/userfave" exact component={Userfaves} />
            <Route path="/singlecocktail/:id" exact component={SingleCocktail} />
          </Switch>
        </div>
        </Router>
      </div>
    )
  }
}

export default App
