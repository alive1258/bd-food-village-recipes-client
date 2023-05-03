import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="w-25 mx-auto mt-4 py-4">
        <h3>Please Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' required type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <Form.Text className="text-secondary ">
            Don't Have an Account ?
           <Link to='/register'>Register</Link>
           </Form.Text> 
        <Form.Text className="text-success">
           
           </Form.Text> 
        <Form.Text className="text-danger">
           
          </Form.Text> 
      </Form>
    </Container>
  );
};

export default Login;