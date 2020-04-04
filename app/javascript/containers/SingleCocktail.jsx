
import React from 'react';
// import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';
// import Heading from './Heading';
// import SingleCocktail from '../components/SingleCocktail';
import { connect } from 'react-redux';
import { getSingleCocktail } from '../actions/index';




class SingleCocktail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cocktail: [],
                    errorMsg:'',
                    successMsg:'',
                  };

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
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Error.");
      })
      .then(response => this.setState({ cocktail: [...response.data], }))
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
          this.setState({
            successMsg: "Cocktail successfully added"
          })
          return response.json();
        }
        throw new Error(
          this.setState({
            errorMsg: "This Cocktail exist in your list"
          })
        );
      })
      .then(()=> {response})
      .catch(error => { error } );
  }



  render() {
    const { cocktail, errorMsg, successMsg } = this.state;
    const { match } = this.props;
    console.log("match =>", match)


    return (
      <>
        <SingleCocktail cocktail={cocktail} errorMsg={errorMsg} successMsg={successMsg} handleAddToFavourite={this.handleAddToFavourite(cocktail)}/>
      </>
    );
  }
}

// SingleCocktail.defaultProps = {
//   match: {},
//   params: {},
//   id: 1,
//   handleLogout: () => {},
//   push: () => {},
// };


// SingleCocktail.propTypes = {
//   history: PropTypes.instanceOf(Object).isRequired,
//   push: PropTypes.instanceOf(Function),
//   handleLogout: PropTypes.instanceOf(Function),
//   match: PropTypes.instanceOf(Object),
//   params: PropTypes.instanceOf(Object),
//   id: PropTypes.number,
// };


const mapStateToProps = state => ({
  cocktail: state.cocktail,
  current_user: state.current_user,
});

const mapDispatchToProps = dispatch => ({
  getDbSingleCocktail: cocktail => dispatch(getSingleCocktail(cocktail)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleCocktail);

// export default SingleCocktail;
