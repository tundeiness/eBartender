import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import { getCocktails, favouriteCocktails } from '../actions/index';
import Cocktails from '../components/CocktailList';


class CocktailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktails: [],
    };
  }


  // componentDidMount() {
  //   axios.get('/api/v1/cocktails', { withCredentials: true })
  //     .then(res => {
  //       this.setState({
  //         cocktails: [...res.data],
  //       });
  //     })
  //     .catch(error => error);
  // }


  componentDidMount() {
    const url = "/api/v1/cocktails";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ cocktails: [...response.data], }))
      .catch(error => error);
}


  render() {
    const { cocktails } = this.state;

    return (
      <div>
        <Cocktails cocktails={cocktails} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktails,
  current_user: state.current_user,
});


const mapDispatchToProps = dispatch => ({
  getDbCocktails: cocktails => dispatch(getCocktails(cocktails)),
  favouriteCocktails: filter => dispatch(favouriteCocktails(filter)),
});

CocktailList.propTypes = {
  // getDbCocktails: PropTypes.instanceOf(Function).isRequired,
  // cocktails: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList);
