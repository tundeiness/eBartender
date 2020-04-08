
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { favouriteCocktails } from '../actions/index';
import Cocktails from '../components/CocktailList';
import { getFavouriteCocktails } from '../actions/index';
import UserFave from '../components/UserFave';


class Favourites extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.loadFavourites = this.loadFavourites.bind(this);
    this.handleRemoveFromFavourite = this.handleRemoveFromFavourite.bind(this);
  }

  // handleChange() {
  //   const { getFaveData } = this.props;
  //   getFaveData();
  // }

  loadFavourites(){
    const { getDbFavourite } = this.props;

    const URL = "/api/v1/favourites_dashboard";
    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Error.");
      })
      .then(
        // response => this.setState({ userFavourites: [...response.data],})
        response => getDbFavourite(response.data)
        )
      .catch(error => error);

  }

  componentDidMount() {
    this.loadFavourites();
    // const URL = "/api/v1/favourites_dashboard";
    // fetch(URL)
    //   .then(response => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw new Error("Network Error.");
    //   })
    //   .then(response => this.setState({ userFavourites: [...response.data],}))
    //   .catch(error => error);

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
    // const { userFaves } = this.props;
    const { favourite } = this.props;
    console.log("My faves =>", favourite);
    // const favs = (
    //   <ul className="cocktail-body">
    //     {favourite
    //       ? favourite.map(fave => <Cocktails key={fave.id} fave={fave} />)
    //       : 'You do not have Favourite cocktails yet'}
    //   </ul>
    // );

    return (
      <div>
        <UserFave favourite={favourite} />
      </div>
      // <div>
      //   <header className="d-flex pb-4 pt-2 mb-5">
      //     <h2 className=" font-weight-bold ml-2">Favourite Cocktail</h2>
      //   </header>
      //   { favs }
      // </div>
    );
  }
}
const mapStateToProps = state => ({
  favourite: state.favourite,
});


const mapDispatchToProps = dispatch => ({
  getDbFavourite: favourite => dispatch(getFavouriteCocktails(favourite)),
});


Favourites.propTypes = {
  favourite: PropTypes.instanceOf(Object).isRequired,
  // getFaveData: PropTypes.instanceOf(Function).isRequired,
  loadFavourites: PropTypes.instanceOf(Function).isRequired,
  handleRemoveFromFavourite: PropTypes.instanceOf(Function).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
