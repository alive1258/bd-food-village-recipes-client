import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const News = () => {
  //   const allRecipes = useLoaderData();

  // console.log('allrecipes---------',allRecipes)
  const [allChefs, setAllChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes/6450e46704881e7bd9e14f2a")
      .then((res) => res.json())
      // .then(data=>console.log(data))
      .then((data) => setAllChefs(data));
    console.log("allChefs new...", allChefs);
  }, []);

  return (
    <div style={{height:'70vh'}}>
      {/* {
            allChefs.map(allChef=><Footer 
            key={allChef._id}
            allChef={allChef}
            ></Footer>)
        } */}
      <Container className="mt-4">
        <Card>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>name:---</Card.Title>
            <Card.Text>title....</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default News;
