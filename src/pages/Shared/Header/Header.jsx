import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaSistrix, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h4 className="text-white">
              Recipes
              <span style={{ color: "greenyellow" }}>BD</span>
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto gap-4 align-items-center">
              {/* <Nav.Link href="#features">Home</Nav.Link> */}

              <Link className=" text-white" to="/">
                Home
              </Link>
              <Link className=" text-white" to="/blog">
                Blog
              </Link>
              <Link className=" text-white" to="/about">
                About
              </Link>
              <Link className=" text-white" s to="/contact">
                Contact Us
              </Link>

              <Form className="d-flex ps-4">
                <Form.Control
                  type="search"
                  placeholder="Search Recipes"
                  className="me-2"
                  aria-label="Search"
                />
                <div
                  className="p-2 rounded"
                  style={{ background: "greenyellow" }}
                >
                  <FaSistrix />
                </div>
                {/* <Button style={{background:"greenyellow"}} variant="outline-success">Search</Button> */}
              </Form>
            </Nav>

            <Nav className="gap-2">
              {user && (
                <FaUserCircle
                  style={{ fontSize: "2rem", color: "white" }}
                ></FaUserCircle>
              )}

              {user ? (
                <Button
                  onClick={handleLogOut}
                  style={{ background: "greenyellow" }}
                  variant="outline-success"
                >
                  LogOut
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    style={{ background: "greenyellow" }}
                    variant="outline-success"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
