
import React from 'react';
import { Link } from 'react-router-dom';
import styling from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Cocktails from '../containers/CocktailList';
// import { getCurrentDate } from '../helper/utility';


const HeadingDiv = styling.div`
background-color: #eb5537;
height: 5rem;
`;

const Footer = styling.div`
background-color: gainsboro;
`;
class Home extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">
      <HeadingDiv className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-column">
          <p className="date ml-3">
            {' '}
            {/* { getCurrentDate('-') } */}
            {' '}
          </p>
        </div>
        <div className="d-flex flex-md-row flex-column ml-auto p-2 pt-md-4" id="dash-content">
          <Link className="faves pr-md-3" id="fave" to="/userfave">My Cocktails</Link>
        </div>
      </HeadingDiv>
      <main>
        <Cocktails />
      </main>
      <Footer className="container-fluid">
        <div className="d-flex flex-row justify-content-md-between" id="row-three">
          <div id="left" />
          <div className="d-flex flex-column" id="footer-matter">
            <div id="footer-logo">
              <img height="50px" src="https://user-images.githubusercontent.com/25479050/76873102-9e03e200-686d-11ea-9ff5-a928ff9cc97d.png" alt="brand-logo" />
            </div>
            <div id="address">
              <p>
                {' '}
                Lafayette Ave 156, Brooklyn, NY, USA
                <br />
                35 St Andrew`s St, Cambridge CB2 3AR, Great Britain
                {' '}
                <br />
                Ground Floor Ikoyi Palace Hotel, Victoria Island Lagos, Nigeria
                {' '}
                <br />
                +347 654 106 681, +234 01-234 8765
              </p>
            </div>
            <div className="d-flex flex-row justify-content-center mb-3" id="socials">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="twitter mr-4" />
              <FontAwesomeIcon icon={faInstagram} size="2x" className="instagram mr-4" />
              <FontAwesomeIcon icon={faFacebook} size="2x" className="facebook" />
            </div>
            <div id="copyright">
              <p>Tipsy-Bartender 2020. All right reserved</p>
            </div>
          </div>
          <div id="right" />
        </div>
      </Footer>
    </div>
    )
  }
}

export default Home
