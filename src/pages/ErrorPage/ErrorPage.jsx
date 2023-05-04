import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center">
        <img
          src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN"
          alt=""
        />
      </div>
      <div className="text-center">
        <Button style={{background:"greenyellow",border:'none'}}><Link to='/'>Go Back to Home</Link></Button>
      </div>
    </div>
  );
};

export default ErrorPage;
