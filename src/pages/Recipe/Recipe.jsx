import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({recipesData}) => {
  const { name,_id ,picture} = recipesData;
  return (
    <div>
      Recipe:....{name}
      
      <div >
        <div className="col">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <div>
              <img style={{width:'110px',height:'110px'}} src={picture} alt="" />
              </div>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p>id:---- {_id}</p>
              <Link to={`/news/${_id}`}>details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
