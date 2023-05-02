import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaSistrix } from "react-icons/fa";

const Header = () => {
  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div>
              <h4 style={{ color: "Gray" }}>
                
                Recipes
                <span style={{ color: "greenyellow" }}>BD</span>
              </h4>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Contact Us</Nav.Link>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Recipes"
                  className="me-2"
                  aria-label="Search"
                />
                <div className="p-2 rounded" style={{ background: "greenyellow" }}>
                  <FaSistrix />
                </div>
                {/* <Button style={{background:"greenyellow"}} variant="outline-success">Search</Button> */}
              </Form>
            </Nav>

            <Nav>
              <Nav.Link href="#deets">
                <Button
                  style={{ background: "greenyellow" }}
                  variant="outline-success"
                >
                  Sign in
                </Button>
              </Nav.Link>
              {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
