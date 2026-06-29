/* eslint-disable no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from '../actions/index';


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
      .then(response => theUser(response))
      .catch(() => theUser({}));
  }

  componentDidMount() {
    this.getTheUsers();
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  user: state.currUser,
});

const mapDispatchToProps = dispatch => ({
  theUser: user => dispatch(getUser(user)),
});


Users.propTypes = {
  theUser: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
