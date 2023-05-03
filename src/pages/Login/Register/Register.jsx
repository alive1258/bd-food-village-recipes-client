import React from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Container className="w-25 mx-auto mt-4 py-4">
        <h3>Please Register</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='text' required type="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photo' required type="text" placeholder="Enter Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' required type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name='accept' label="Accept Terms and Condition" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary ">
           Already Have an Account ?
           <Link to='/login'>Login</Link>
           </Form.Text> 
        <Form.Text className="text-success">
           
           </Form.Text> 
        <Form.Text className="text-danger">
           
          </Form.Text> 
      </Form>
    </Container>
    );
};

export default Register;