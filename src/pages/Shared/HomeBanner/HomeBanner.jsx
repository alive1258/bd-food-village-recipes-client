import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const HomeBanner = () => {
  return (
    <div>
      <Container className="mt-4 rounded" style={{ background: "Gray" }}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <div className="d-md-flex  align-items-center justify-content-around gap-4 px-4 py-4">
              <div>
                <img
                  className="d-block img-fluid"
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="First slide"
                />
              </div>

              <div>
                <h3 style={{ color: "greenyellow" }}>
                  Bangladesh Food  Recipes
                </h3>
                <p className="text-white">
                  It's time to kick start a new lifestyle.
                </p>
                <p className="text-white">Start eating feeling
                  and living better today.</p>
                
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={500}>
            <div className="d-md-flex  align-items-center justify-content-around gap-4 px-4 py-4">
              <div>
                <img
                  className="d-block img-fluid "
                  src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  alt="First slide"
                />
              </div>

              <div >
                <h3 style={{ color: "greenyellow" }}>
                  Bangladesh Food  Recipes
                </h3>
                <p className="text-white">  your relationship with food for the
                  better,</p>
                <p className="text-white">
                  follow us @healthyfirst for your daily meal 
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-md-flex  align-items-center justify-content-around gap-4 px-4 py-4">
              <div>
                <img
                
                  className="d-block img-fluid "
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgyfHxmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="First slide"
                />
              </div>

              <div className="mt-2">
                <h3 style={{ color: "greenyellow" }}>
                  Bangladesh Food  Recipes
                </h3>
                <p className="text-white">Healthy Cooking Tips & Right Nutrition</p>
                <p className="text-white">Build good habits with us & our meal
                  plans.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default HomeBanner;
