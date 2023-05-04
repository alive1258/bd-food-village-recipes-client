import React from "react";
import { Button } from "react-bootstrap";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";


const Recipe = ({ recipesData }) => {
  const { name, _id, picture,experience ,numberRecipes,like} = recipesData;
  return (
    <div>
    
      <div className="mt-4 ">
        <div className="col ">
          <div  className="card h-100 shadow-lg p-3 mb-5 bg-body rounded">
         

            <img
              className="card-img-top p-2 "
       
              src={picture}
              alt=""
            />
           
            <div className="card-body">
              <div></div>
              <h4 className="card-text">
              {name}
              </h4>
              <h6>Experience:-{experience}</h6>
              <div className="d-flex justify-content-between">
                <p>Recipes: {numberRecipes} Items</p>
                <p  ><SlLike style={{color:'greenyellow'}}/> {like}</p>
                
              </div>
             <Button className="w-100"
             style={{background: "greenyellow",border:'none'}}  
                 > <Link to={`/recipe/${_id}`} className="text-white" style={{ textDecoration:'none' }}>View Recipes</Link></Button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
