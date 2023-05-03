import React from 'react';
import Header from '../../Shared/Header/Header';
import HomeBanner from '../../Shared/HomeBanner/HomeBanner';
import Recipes from '../Recipes/Recipes';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header></Header>
      {/* <Outlet></Outlet> */}
    <HomeBanner></HomeBanner>
      <Recipes></Recipes>
      <Footer></Footer>
        </div>
    );
};

export default Home;