import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const HomeBanner = () => {

  return (
    <div>
      <Container className="mt-4 rounded " style={{ background: "Gray" }}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <div className="d-flex align-items-center justify-content-between px-4 py-4">
              <div>
                <img
                  className="d-block w-100 "
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="First slide"
                />
              </div>

              <div>
                <h3 style={{ color: "greenyellow" }}>
                  Bangladesh Food Village Recipes
                </h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <div className="d-flex align-items-center justify-content-between px-4 py-4">
              <div>
                <img
                  className="d-block w-100 "
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="First slide"
                />
              </div>

              <div>
                <h3 style={{ color: "greenyellow" }}>
                  Bangladesh Food Village Recipes
                </h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-between px-4 py-4">
              <div>
                <img
                  className="d-block w-100 "
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="First slide"
                />
              </div>

              <div>
                <h3 style={{ color: "greenyellow" }}>
                  Bangladesh Food Village Recipes
                </h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeBanner;
