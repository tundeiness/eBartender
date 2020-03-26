
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styling from 'styled-components';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { getCurrentDate } from '../helper/utility';

const HeadingDiv = styling.div`
background-color: #eb5537;
height: 5rem;
`;


class SingleCocktail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cocktail: '' };

    this.handleAddToFavourite = this.handleAddToFavourite.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const url = `/api/v1/cocktails/${id}`;
    fetch(url)
      .then(response => {
        console.log(response.data);
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Error.");
      })
      .then(response => this.setState({ cocktail: response.data, }))
      .catch(error => error);
  }

  handleAddToFavourite(cocktail) {

    const URL = "/api/v1/favourite_cocktails";

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(URL, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({favourite_cocktail: { cocktail_id: cocktail.id }})
    })
      .then(response => {
        if (response.ok) {
          toast.success('Added to your favourite Cocktails');
          return response.json();
        }
        throw new Error(toast.error('This Cocktail exist in your list, choose another one'));
      })
      .then(()=> {response})
      .catch(error => { error } );
  }


  redirect() {
    const { history } = this.props;
    history.push('/dashboard');
  }


  render() {
    const { cocktail } = this.state;

    return (
      <div className="d-flex flex-column content-wrapper">
        <HeadingDiv className="d-flex flex-row justify-content-between ">
          <div className="d-flex flex-column">
            <p className="single-cocktail-date ml-3 mt-4">
              {' '}
              {/* { getCurrentDate('-') } */}
              {' '}
            </p>
          </div>
          <div className="d-flex flex-md-row flex-column ml-auto p-2 pt-md-4" id="dash-content">
            <Link className="faves pr-md-3" id="fave" to="/userfave">My Cocktails</Link>
          </div>
        </HeadingDiv>
        <div className="d-flex flex-md-row flex-sm-column justify-content-between">
          <div className="card mb-4" />
          <div className="card mb-4" style={{ width: '25rem' }} id="content-card">
            <img
              src={cocktail.image}
              className="card-img-top"
              alt={`${cocktail.name}`}
            />
            <div className="card-body">
              <h5 className="card-title single-heading">{cocktail.name}</h5>
              <p className="card-text">
                {' '}
                {cocktail.description}
              </p>
              <hr />
              <h6 className="card-title  single-sub-heading">Ingredients:</h6>
              <p className="card-text">
                {' '}
                {cocktail.ingredients}
              </p>
            </div>
            <div className="link-group">
              <Link to="/dashboard" className="btn btn-link" id="backButton">
                <FontAwesomeIcon icon={faAngleLeft} className="angle-left" />
                {' '}
                Back to cocktails
              </Link>
              <button type="button" id="addToFave" onClick={() => this.handleAddToFavourite(cocktail)}>
                <FontAwesomeIcon icon={faHeart} className="heart" />
                Add to Favourites
              </button>
            </div>
          </div>
          <div className="card mb-4" />
        </div>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
      </div>
    );
  }
}

SingleCocktail.defaultProps = {
  match: {},
  params: {},
  id: 1,
  handleLogout: () => {},
  push: () => {},
};


SingleCocktail.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  push: PropTypes.instanceOf(Function),
  handleLogout: PropTypes.instanceOf(Function),
  match: PropTypes.instanceOf(Object),
  params: PropTypes.instanceOf(Object),
  id: PropTypes.number,
};


export default SingleCocktail;
