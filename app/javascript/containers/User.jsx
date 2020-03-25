/* eslint-disable no-useless-constructor */
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { getUser } from '../actions/index';


class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { theUser } = this.props;


    axios.get('/api/v1/users', { theUser }, { withCredentials: true })
      .then(res => {
        theUser(res.data);
      })
      .catch(error => error);
  }

  render() {
    const { currUser } = this.props;
    return (
      <div className="current_user pt-1 pb-1 pl-5">
        { currUser ? (
          <h6>
            Current user:
            { ' ' }
            { currUser.username }
          </h6>
        ) : 'No current user yet'}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currUser: state.currUser,
});

const mapDispatchToProps = dispatch => ({
  theUser: user => dispatch(getUser(user)),
});


Users.propTypes = {
  theUser: PropTypes.instanceOf(Function).isRequired,
  currUser: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
