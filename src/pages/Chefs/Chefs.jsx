import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Chefs = () => {
  const allRecipes = useLoaderData();

  return (
    <div style={{ height: "70vh" }} className="mt-4">
  

      <Container>
      <h1 className="text-center m-4">Chef Details</h1>
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Text>recipe</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Chefs;
