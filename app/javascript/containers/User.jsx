/* eslint-disable no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/index';
import Cocktails from '../components/CocktailList';


class Users extends React.Component {
  constructor(props) {
    super(props);

    this.getTheUsers=this.getTheUsers.bind(this);
  }


  getTheUsers(){
    const { theUser } = this.props;

    const url = "/api/v1/users";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network Error.");
      })
      .then(response => theUser(response.data))
      .catch(error => error);
  }

  componentDidMount() {
    this.getTheUsers();
  }

  render() {
    const { user } = this.props;
    console.log("USER=>", user)
    return (
      <div className="current_user pt-1 pb-1 pl-5">
        { currUser ? (
          <h6>
            Current user:
            { ' ' }
            { currUser.username }
          </h6>
        ) : 'No current user yet'}
        <Cocktails currUser = {user}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  theUser: user => dispatch(getUser(user)),
});


Users.propTypes = {
  theUser: PropTypes.instanceOf(Function).isRequired,
  // currUser: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
