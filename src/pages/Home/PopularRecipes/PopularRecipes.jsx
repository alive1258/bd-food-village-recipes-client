import React from "react";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import MarquerePopularRecipes from "../MarquerePropularRecipes/MarquerePopularRecipes";

const PopularRecipes = () => {
  return (
    <div className="mt-4 py-4">
      <Container>
        <div className="text-center">
            <h2 style={{color:"greenYellow"}}>Popular Recipes</h2>
            <p>Most popular recipes of our Chef. It's Healthy and Testy </p>
            </div>
        <Marquee speed={50} className="mt-4">
         <MarquerePopularRecipes></MarquerePopularRecipes>
         <MarquerePopularRecipes></MarquerePopularRecipes>
         <MarquerePopularRecipes></MarquerePopularRecipes>
         <MarquerePopularRecipes></MarquerePopularRecipes>
     
        </Marquee>
      </Container>
    </div>
  );
};

export default PopularRecipes;
