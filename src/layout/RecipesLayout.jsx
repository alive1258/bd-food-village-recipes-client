import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import News from '../pages/News/News';
import Chefs from '../pages/Chefs/Chefs';


const RecipesLayout = () => {
    return (
        <div>
            <Header></Header>
            {/* <News></News> */}
            <Chefs></Chefs>
            <Footer></Footer>
        </div>
    );
};

export default RecipesLayout;