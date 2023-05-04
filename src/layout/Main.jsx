import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import HomeBanner from "../pages/Shared/HomeBanner/HomeBanner";
import Recipe from "../pages/Recipe/Recipe";
import Recipes from "../pages/Home/Recipes/Recipes";
import HealthyMeals from "../pages/Home/HealthyMeals/HealthyMeals";
import PopularRecipes from "../pages/Home/PopularRecipes/PopularRecipes";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <HomeBanner></HomeBanner>
    <Recipes></Recipes>
    <HealthyMeals></HealthyMeals>
    <PopularRecipes></PopularRecipes>
      <Footer></Footer>
    </div>
  );
};

export default Main;
