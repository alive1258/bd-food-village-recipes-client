import React from "react";
import { Button, Container } from "react-bootstrap";

const HealthyMeals = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <h2 style={{ color: "greenyellow" }}>Healthy Meals</h2>
        <p>The taste of nature eat clean and green & eat organic</p>
      </div>
      <div className="d-md-flex  align-items-center justify-content-around gap-4 mt-4 px-4 py-4">
        <div className=" py-4">
          <h5>
            Start eating, feeling and leaving better today.
            <br /> Build good habits with us and our meal plans
          </h5>
          <p className="mt-4">
            Get Healthy cooking tips and the right nutrition. We cook health
            food that give <br /> opportunities to become more efficient and focused on
            your goals.
            
          </p>
          <p>The taste of nature eat clean and green & eat organic</p>
          <Button style={{ background: "greenyellow", border: "none" }}>
            View More Healthy Meals
          </Button>
        </div>
        <div>
            <img  className="rounded" src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default HealthyMeals;
