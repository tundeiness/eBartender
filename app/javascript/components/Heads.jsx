import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HeadingDiv } from '../home/style';


const FaveHeading = ({ currUser }) => (
  <HeadingDiv className="d-flex flex-row justify-content-between ">
    <div className="d-flex flex-column">
      <p className="single-cocktail-date ml-3 mt-4"></p>
    </div>
    <div className="d-flex flex-md-row flex-column ml-auto p-2 pt-md-4" id="dash-content">
      <Link className="faves pr-md-3" id="fave" to="/dashboard">Dashboard</Link>
      {currUser && currUser.admin && (
        <Link className="faves pr-md-3" to="/admin">Admin Panel</Link>
      )}
    </div>
  </HeadingDiv>
);

FaveHeading.propTypes = {
  currUser: PropTypes.instanceOf(Object),
};

FaveHeading.defaultProps = {
  currUser: null,
};


const Heading = ({ currUser }) => (
  <HeadingDiv className="d-flex flex-row justify-content-between">
    <div className="d-flex flex-column">
      <p className="date ml-3"></p>
    </div>
    <div className="d-flex flex-md-row flex-column ml-auto p-2 pt-md-4" id="dash-content">
      <Link className="faves pr-md-3" id="fave" to="/userfave">My Cocktails</Link>
      {currUser && currUser.admin && (
        <Link className="faves pr-md-3" to="/admin">Admin Panel</Link>
      )}
    </div>
  </HeadingDiv>
);

Heading.propTypes = {
  currUser: PropTypes.instanceOf(Object),
};

Heading.defaultProps = {
  currUser: null,
};


const mapStateToProps = state => ({ currUser: state.currUser });

const ConnectedHeading = connect(mapStateToProps)(Heading);
const ConnectedFaveHeading = connect(mapStateToProps)(FaveHeading);

export { ConnectedHeading as Heading, ConnectedFaveHeading as FaveHeading };
