import React, { useEffect, useState } from "react";
import Recipe from "../../Recipe/Recipe";
import Footer from "../../Shared/Footer/Footer";
// import LazyLoad from 'react-lazy-load';

const Recipes = () => {
  const [recipesDatas, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
    // console.log(recipesDatas)
  }, []);
  return (
    <div  className="container mx-auto  mt-4 ">
          <div className="text-center">
        <h3  style={{color:"greenyellow"}}>Best Chef of Bangladesh</h3>
        <p>HealthFirst is sure to be the key ingredient to your new beautiful & perfectly balanced nutrition Food</p>
      </div>
      <div  className="row row-cols-1 row-cols-md-3 ">
        {recipesDatas.map((recipesData) => (
          <Recipe recipesData={recipesData} key={recipesData._id}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
