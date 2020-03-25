import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styling from 'styled-components';
import { getCurrentDate } from '../helper/utility';

const HeadingDiv = styling.div`
background-color: #eb5537;
height: 5rem;
`;

class UserFave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userFavourites: [],
    };
    this.handleRemoveFromFavourite = this.handleRemoveFromFavourite.bind(this);
    this.redirect = this.redirect.bind(this);
    this.redirectLogout = this.redirectLogout.bind(this);
    // this.logoutClick = this.logoutClick.bind(this);
  }

  componentDidMount() {
    // axios.get('/api/v1/favourite_dashboards', { withCredentials: true })
    //   .then(res => {
    //     this.setState({
    //       userFavourites: [...res.data],
    //     });
    //   })
    //   .catch(error => error);

    const URL = "/api/v1/favourite_dashboards";
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

  // logoutClick() {
  //   const { handleLogout } = this.props;
  //   axios
  //     .delete('https://floating-woodland-73879.herokuapp.com/api/v1/logout', { withCredentials: true })
  //     .then(() => {
  //       handleLogout();
  //       this.redirectLogout();
  //     })
  //     .catch(error => error);
  // }

  handleRemoveFromFavourite() {
    // axios.delete(`/api/v1/favourite_cocktails/${id}`, { withCredentials: true })
    //   .then(() => {
    //     this.redirect();
    //   })
    //   .catch(error => error);

    const {
      match: {
        params: { id }
      }
    } = this.props;

    const url = `/api/v1/favourite_cocktails/${id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Error");
      })
      .then(() => this.redirect())
      .catch(error => error);

  }

  redirect() {
    const { history } = this.props;
    history.push('/dashboard');
  }

  redirectLogout() {
    const { history } = this.props;
    history.push('/');
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
          <button type="button" id="addToFave" onClick={() => this.handleRemoveFromFavourite()}>
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
          No cocktail exist in your list yet. Why not take a look at our current list of cocktails
          {' '}
          <Link to="/dashboard" id="userfave-btn">Home</Link>
        </h4>
      </div>
    );

    return (

      <>
        <HeadingDiv className="d-flex flex-row justify-content-between ">
          <div className="d-flex flex-column">
            <p className="single-cocktail-date ml-3 mt-4">
              {' '}
              {/* {getCurrentDate('-')} */}
              {' '}
            </p>
          </div>
          <div className="d-flex flex-md-row flex-column ml-auto p-2 pt-md-4" id="dash-content">
            <Link className="faves pr-md-3" id="fave" to="/dashboard">Dashboard</Link>
            {/* <button type="button" className="dashboard mt-1" onClick={() => this.logoutClick()}>LOG OUT</button> */}
          </div>
        </HeadingDiv>
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
