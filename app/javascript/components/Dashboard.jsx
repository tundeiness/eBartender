/* eslint-disable no-use-before-define */
import React from 'react';
import Cocktails from '../containers/CocktailList';
import Footer from './Footer';
import { Heading } from './Heads';



const Dashboard = props => {
  return (
    <div className="d-flex flex-column">
        <Heading/>
      <main>
        <Cocktails />
      </main>
        <Footer/>
    </div>
  );
};


export default Dashboard;
