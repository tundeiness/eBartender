
import React from 'react';
import { Link } from 'react-router-dom';
import styling from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';



const Div = styling.div`
 background-image: url('https://user-images.githubusercontent.com/25479050/76873043-87f62180-686d-11ea-929c-542c5a0f2f6d.jpg');
 height: 100%;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 `;

const Subhead = styling.p`
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: light;
  margin-top: 3.5rem;
 `;

const Heading = styling.h2`
 color: #000;
 line-height: 16px;
 font-weight: bold;
 font-family: 'Source Sans Pro', sans-serif;
`;

const Footer = styling.div`
background-color: #fff;
`;


const Home = () => (
  <div>
    <Div className="container-fluid">
      <div className="d-flex flex-column" id="top-matter">
        <div className="d-flex flex-row justify-content-md-between " id="row-one">
          <div id="header-logo">
            <img height="50px" src={logo} alt="brand-logo" />
          </div>
          <div className="d-none d-sm-block ml-auto">
            <div className="d-flex flex-row ">
              <Link className="link" to="/login">SIGN IN</Link>
              <Link className="link" to="/signup">SIGN UP</Link>
            </div>
          </div>
          <div className="d-sm-none ml-auto">
            <div className="d-flex flex-row ">
              <Link className="link" to="/login">SIGN IN</Link>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row" id="row-two">
          <div id="message">
            <Heading>
              Find your
              <br />
              <br />
              Cocktails
              {' '}
              <br />
              <br />
              {' '}
              anywhere
            </Heading>

            <Subhead>
              The best offers for you at any point of your journey.
              <br />
              Wherever you are, feel yourself like at your personal bar
            </Subhead>

            <Link className="start-free" id="start" to="/signup">START FREE</Link>
          </div>
        </div>
      </div>
    </Div>
    <Footer className="container-fluid">
      <div className="d-flex flex-row justify-content-md-between" id="row-three">
        <div id="left" />
        <div className="d-flex flex-column" id="footer-matter">
          <div id="footer-logo">
            <img height="50px" src={'https://user-images.githubusercontent.com/25479050/76873102-9e03e200-686d-11ea-9ff5-a928ff9cc97d.png'} alt="brand-logo" />
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
);

export default Home;
