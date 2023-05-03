import React, { useEffect, useState } from "react";
import Recipe from "../../Recipe/Recipe";
import Footer from "../../Shared/Footer/Footer";

const Recipes = () => {
  const [recipesDatas, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
    // console.log(recipesDatas)
  }, []);
  return (
    <div className="container mx-auto py-4    ">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipesDatas.map((recipesData) => (
          <Recipe recipesData={recipesData} key={recipesData._id}></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
