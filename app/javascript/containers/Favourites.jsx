import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFavouriteCocktails } from '../actions/index';
import Cocktails from '../components/CocktailList';


class Favourites extends React.Component {
  constructor(props) {
    super(props);


    this.getTheFaves = this.getTheFaves.bind(this);
  }

  componentDidMount() {
    this.getTheFaves();
	}



  getTheFaves(){
    const { favouriteCocktails } = this.props

    const URL = "/api/v1/favourites_dashboard";
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Error.");
      })
      .then(response => favouriteCocktails([...response.data]))
      .catch(error => error);
  }

  render() {
    const { favourites } = this.props;

    console.log('test data =>',favourites)
    // const favs = (
    //   <ul className="cocktail-body">
    //     {favourites
    //       ? favourites.map(fave => <Cocktails key={fave.id} fave={fave} />)
    //       : 'You do not have Favourite cocktails yet'}
    //   </ul>
    // );
    return (
      <div>
        <header className="d-flex pb-4 pt-2 mb-5">
          <h2 className=" font-weight-bold ml-2">Favourite Cocktail</h2>
        </header>
        <Cocktails favourites={favourites} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  favourites: state.favourites,
});
const mapDispatchToProps = dispatch => ({
  favouriteCocktails: favourites => dispatch(getFavouriteCocktails(favourites)),
});
Favourites.propTypes = {
  favourites: PropTypes.instanceOf(Object).isRequired,
  favouriteCocktails: PropTypes.instanceOf(Function).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
