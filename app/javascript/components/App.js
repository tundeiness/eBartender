import React from 'react';
import Home from './Home';
import Cocktails from './CocktailList';
import SingleCocktail from './SingleCocktail';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import Userfaves from './UserFave';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast} from 'react-toastify';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
          <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route exact path="/cocktails" component={Cocktails} />
            <Route path="/userfave" exact component={Userfaves} />
            <Route path="/singlecocktail/:id" exact component={SingleCocktail} />
            {/* TODO <Route path="*" component={NotFound} status={404} /> */}
          </Switch>
        </div>
        </Router>
      </div>
    )
  }
}

export default App
