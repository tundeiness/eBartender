import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaveHeading } from './Heads';

class UserFave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFavourites: [],
    };
    this.handleRemoveFromFavourite = this.handleRemoveFromFavourite.bind(this);
  }

  componentDidMount() {

    const URL = "/api/v1/favourites_dashboard";
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Error.");
      })
      .then(response => this.setState({ userFavourites: [...response.data],}))
      .catch(error => error);

  }



  handleRemoveFromFavourite(id) {

    const URL = `/api/v1/favourite_cocktails/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(URL, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          toast.success('Successfully removed');
          this.setState({
            userFavourites: userFavourites.filter(fave => fave.id !== id),
          });
          return response.json();
        }
        throw new Error(toast.error('This Cocktail no longer exist in your list'));
      })
      .then(() => { this.redirect() } )
      .catch(error => error);

  }


  render() {

    const { userFavourites } = this.state;
    const allUserFavouritesCocktails = userFavourites.map(faves => (
      <div key={faves.id} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={faves.image}
            className="card-img-top"
            alt={`${faves.name}`}
            style={{ height: '270px' }}
          />
          <div className="card-body">
            <h5 className="card-title text-center single-heading">{faves.name}</h5>
            <p className="card-text">
              {' '}
              {faves.description}
            </p>
            <hr />
            <h6 className="card-title  single-sub-heading">Ingredients:</h6>
            <p className="card-text">
              {' '}
              {faves.ingredients}
            </p>
          </div>
          <button type="button" id="addToFave" onClick={() => this.handleRemoveFromFavourite(faves.id)}>
            <FontAwesomeIcon icon={faTrash} className="trash" />
            {' '}
            Remove From Favourite
          </button>
        </div>
      </div>
    ));

    const noFavouriteCocktail = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No cocktail exist in your list yet. Why not take a look at our current list of cocktails?
          {' '}
          <Link to="/dashboard" id="userfave-btn">Home</Link>
        </h4>
      </div>
    );

    return (

      <>
        <FaveHeading/>
        <div className="container py-5 text-center">
          <p className="lead text-muted">
            Here are the list of your recent favourite cocktails
          </p>
        </div>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {userFavourites.length > 0 ? allUserFavouritesCocktails : noFavouriteCocktail}
            </div>
          </main>
        </div>
      </>
    );
  }
}

UserFave.defaultProps = {
  push: () => {},
};


UserFave.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  push: PropTypes.instanceOf(Function),
};

export default UserFave;
