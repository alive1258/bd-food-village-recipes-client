import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import News from '../pages/News/News';


const RecipesLayout = () => {
    return (
        <div>
            <Header></Header>
            <News></News>
            <Footer></Footer>
        </div>
    );
};

export default RecipesLayout;