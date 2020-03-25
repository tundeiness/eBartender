
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favouriteCocktails } from '../actions/index';
import Cocktails from '../components/CocktailList';


class Favourites extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { getFaveData } = this.props;
    getFaveData();
  }

  render() {
    const { userFaves } = this.props;
    const favs = (
      <ul className="cocktail-body">
        {userFaves
          ? userFaves.map(fave => <Cocktails key={fave.id} fave={fave} />)
          : 'You do not have Favourite cocktails yet'}
      </ul>
    );
    return (
      <div>
        <header className="d-flex pb-4 pt-2 mb-5">
          <h2 className=" font-weight-bold ml-2">Favourite Cocktail</h2>
        </header>
        { favs }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userFaves: state.favouriteCocktails,
});


const mapDispatchToProps = dispatch => ({
  favouriteCocktails: cocktails => dispatch(favouriteCocktails(cocktails)),
});


Favourites.propTypes = {
  userFaves: PropTypes.instanceOf(Object).isRequired,
  getFaveData: PropTypes.instanceOf(Function).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
