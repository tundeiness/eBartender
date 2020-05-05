/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class CocktailList extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(id) {
    const { handleFavourite } = this.props;
    handleFavourite(id);
  }


  render() {

    const { cocktails, currUser } = this.props;
    console.log("USER=>", currUser)

    const allCocktails = cocktails.map((cocktail, idx) => (
      <div key={idx} className="col-md-6 col-lg-4 mb-4">
        <div className="card mb-4" style={{ height: '26rem' }}>
          <img
            src={cocktail.image}
            className="card-img-top"
            alt={`${cocktail.name}`}
            style={{ height: '270px' }}
          />
          <div className="card-body cocktails-card-body">
            <h5 className="card-title text-center list-heading">{ cocktail.name }</h5>
          </div>
          <button className="text-center link-wrapper" type="button">
            <Link to={`/singlecocktail/${cocktail.id}`} id="view">
              More...
            </Link>
          </button>
        </div>
      </div>
    ));

    return (
      <div>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Cocktails for all Occasions</h1>
            <p className="lead text-muted">
              Here is a List of our most popular cocktails, so there’s sure to be something for you to try.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              { cocktails.length > 0 ? allCocktails : <Link className="link" style={{ backgroundColor: '#eb5537' }} to="/login">SIGN IN</Link> }

            </div>
          </main>
        </div>
        <ToastContainer position={toast.POSITION.BOTTOM_RIGHT}/>
      </div>
    );
  }
}

CocktailList.defaultProps = {
  handleFavourite: () => {},
};

CocktailList.propTypes = {
  cocktails: PropTypes.instanceOf(Object).isRequired,
  handleFavourite: PropTypes.instanceOf(Function),
};

export default CocktailList;
