import React from 'react';
import { Link } from 'react-router-dom';
import { HeadingDiv } from '../home/style';


const FaveHeading = props => {

  return (
    <HeadingDiv className="d-flex flex-row justify-content-between ">
      <div className="d-flex flex-column">
        <p className="single-cocktail-date ml-3 mt-4"></p>
      </div>
      <div className="d-flex flex-md-row flex-column ml-auto p-2 pt-md-4" id="dash-content">
        <Link className="faves pr-md-3" id="fave" to="/dashboard">Dashboard</Link>
      </div>
    </HeadingDiv>
  )
}


const Heading = props => {

  return (
    <HeadingDiv className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
          <p className="date ml-3"></p>
        </div>
        <div className="d-flex flex-md-row flex-column ml-auto p-2 pt-md-4" id="dash-content">
          <Link className="faves pr-md-3" id="fave" to="/userfave">My Cocktails</Link>
        </div>
    </HeadingDiv>
  )
}

export { Heading, FaveHeading };

