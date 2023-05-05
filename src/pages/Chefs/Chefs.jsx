import React from "react";
import { Button, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaRegStar, FaStar } from "react-icons/fa";

const Chefs = () => {
  const allRecipes = useLoaderData();
  console.log("allrecips...", allRecipes);
  const {
    name,
    about,
    author,
    picture,
    experience,
    like,
    numberRecipes,
    rating,
  } = allRecipes;

  return (
    <div className="mt-4 px-4 py-4">
      <Container className="mt-4">
        <h1 style={{ color: "greenyellow" }} className="text-center m-4">
          Chef Details
        </h1>
        <div className="row p-4 text-white rounded" style={{background:"darkgray"}}>
          <div className="col-md-4">
            <img className="img-fluid rounded " src={picture} alt="" />
          </div>
          <div className="col-md-8 text-center">
            <h4 className="text-center">{name}</h4>
            <p>
              <span style={{ color: "yellowgreen", fontSize: "20px" }}>
                Bio:-
              </span>
              {about}
            </p>
            <div className="d-md-flex gap-4">
              <h6>
                <SlLike style={{ color: "greenyellow" }} /> {like}
              </h6>
              <h6>Number of Recipes: {numberRecipes}</h6>
              <h6>Experience: {experience}</h6>
            </div>
          </div>
        </div>

        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            <div className="col">
              <div className="card h-100">
                <img
                  style={{ height: "200px" }}
                  src={author.imgRecipe_1}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "yellowgreen" }}>
                    {author.recipe_name_1}
                  </h5>
                  <p className="card-text">
                    <span style={{ color: "yellowgreen" }}>Ingredients:-</span>
                    {author.recipe_ingredients_1}
                  </p>
                  <p className="card-text">
                    <span style={{ color: "yellowgreen" }}>
                      Cooking Method:-
                    </span>
                    {author.recipe_ingredients_3}
                    {author.cooking_method_recipe_1.length < 140 ? (
                      <>{author.cooking_method_recipe_1}</>
                    ) : (
                      <>
                        {author.cooking_method_recipe_1.slice(0, 140)}......{" "}
                        <br />
                        <span style={{ color: "yellowgreen" }}>
                          Read More.......
                        </span>{" "}
                      </>
                    )}
                  </p>
                  <p className="d-flex align-items-center">
                    <Rating
                      className="me-2"
                      style={{ maxWidth: 150 }}
                      value={Math.round(rating.number)}
                      readOnly
                    />
                    {rating.number}
                  </p>
            
                </div>
                <div class="card-footer">
                  <Button
                    className="w-100"
                    style={{ background: "greenyellow", border: "none" }}
                  >
                    Favorite
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  style={{ height: "200px" }}
                  src={author.imgRecipe_2}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "yellowgreen" }}>
                    {author.recipe_name_2}
                  </h5>
                  <p className="card-text">
                    <span style={{ color: "yellowgreen" }}>Ingredients:-</span>
                    {author.recipe_ingredients_2}
                  </p>
                  <p className="card-text">
                    <span style={{ color: "yellowgreen" }}>
                      Cooking Method:-
                    </span>
                    {author.recipe_ingredients_3}
                    {author.cooking_method_recipe_2.length < 140 ? (
                      <>{author.cooking_method_recipe_2}</>
                    ) : (
                      <>
                        {author.cooking_method_recipe_2.slice(0, 140)}......{" "}
                        <br />
                        <span style={{ color: "yellowgreen" }}>
                          Read More.......
                        </span>{" "}
                      </>
                    )}
                  </p>
                  <p className="d-flex align-items-center">
                    <Rating
                      className="me-2"
                      style={{ maxWidth: 150 }}
                      value={Math.round(rating.number)}
                      readOnly
                    />
                    {rating.number}
                  </p>
                  <div></div>
                </div>
                <div class="card-footer">
                  <Button
                    className="w-100"
                    style={{ background: "greenyellow", border: "none" }}
                  >
                    Favorite
                  </Button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  style={{ height: "200px" }}
                  src={author.imgRecipe_3}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ color: "yellowgreen" }}>
                    {author.recipe_name_3}
                  </h5>
                  <p className="card-text">
                    <span style={{ color: "yellowgreen" }}>Ingredients:-</span>
                    {author.recipe_ingredients_3}
                  </p>
                  <p className="card-text">
                    <span style={{ color: "yellowgreen" }}>
                      Cooking Method:-
                    </span>
                    {author.recipe_ingredients_3}
                    {author.cooking_method_recipe_3.length < 140 ? (
                      <>{author.cooking_method_recipe_3}</>
                    ) : (
                      <>
                        {author.cooking_method_recipe_3.slice(0, 140)}......{" "}
                        <br />
                        <span style={{ color: "yellowgreen" }}>
                          Read More.......
                        </span>{" "}
                      </>
                    )}
                  </p>
                  <p className="d-flex align-items-center">
                    <Rating
                      className="me-2"
                      style={{ maxWidth: 150 }}
                      value={Math.round(rating.number)}
                      readOnly
                    />
                    {rating.number}
                  </p>
                </div>
                <div class="card-footer">
                  <Button
                    className="w-100"
                    style={{ background: "greenyellow", border: "none" }}
                  >
                    Favorite
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chefs;
