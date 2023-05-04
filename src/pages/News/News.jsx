import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
// import Footer from "../Shared/Footer/Footer";

const News = () => {
    const recipe = useLoaderData();
    // const {author}=allRecipes

  console.log('recipe---------',recipe)
  const [allChefs, setAllChefs] = useState([]);
//   const {_id} =useParams()

//   useEffect(() => {
//     fetch(`http://localhost:5000/recipes/${params._id}`)
//       .then((res) => res.json())
//       .then(data=>console.log(data))
//       .then((data) => setAllChefs(data));
//     console.log("allChefs new...", allChefs);
//   }, []);

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
            {/* <Card.Title>name:---{author.name}</Card.Title> */}
            <Card.Text>title....</Card.Text>
            <Button variant="primary">Favorite </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default News;
