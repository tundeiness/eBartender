import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadCocktails } from '../actions/index';
import Cocktails from '../components/CocktailList';


class CocktailList extends React.Component {
  constructor(props) {
    super(props);
    this.getThecocktails = this.getThecocktails.bind(this);
  }


  getThecocktails(){
    const { getDbCocktails } = this.props

    const url = "/api/v1/cocktails";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(
        response => getDbCocktails(response.data)
      )
      .catch(error => error);
  }


  componentDidMount() {
    this.getThecocktails();
	}


  render() {
    const {cocktails} = this.props;

    return (
      <div>
        <Cocktails  cocktails={cocktails} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cocktails: state.cocktails,
  // current_user: state.current_user,
});


const mapDispatchToProps = dispatch => ({
  getDbCocktails: cocktails => dispatch(loadCocktails(cocktails)),
});

CocktailList.propTypes = {
  cocktails: PropTypes.instanceOf(Object).isRequired,
  getDbCocktails: PropTypes.instanceOf(Function).isRequired,
};

 export default connect(mapStateToProps, mapDispatchToProps)(CocktailList);
