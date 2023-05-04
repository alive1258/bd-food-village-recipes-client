import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
// import { getAuth } from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [registerError, setRegisterError] = useState("");
//   const [success, setSuccess] = useState("");

  console.log("registerError...", registerError);
  const auth = getAuth(app);
    const user = auth.currentUser;

  const handleRegister = (event) => {
    event.preventDefault();
    // setSuccess('')
    setRegisterError('')
    const form = event.target;
    const displayName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // if(!/(?=.*[A_Z])/.test(password)){
    //     setRegisterError('usepcase')
    //     return;
    // }
    if(password.length <6){
        setRegisterError('please add at least 6 characters in your password');
        return;
    }
  
    console.log(photoURL, displayName, email, password);
    form.reset("");
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        setRegisterError("");
        setSuccess('user has crated successfully')
      })
      .catch((error) => {
        console.log(error.massage);
        setRegisterError(error.massage);
        setSuccess('')
      });

    profileUpdate(auth.currentUser, {
      displayName,
      photoURL,
    })
      .then(() => {
        const displayName = result.user;
        const photoURL = result.user;
        console.log(displayName, photoURL);
        setRegisterError("");
      })
      .catch((error) => {
        console.log(error.massage);
        setRegisterError(error.massage);
      });
  };
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div>
      <h3 className="text-center">please Register</h3>
      <Container className="row mx-auto d-flex justify-content-center mt-4 py-4">
        <Form onSubmit={handleRegister} className="col-md-6">
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleAccepted}
              type="checkbox"
              name="accept"
              label={
                <>
                  Accept <Link to="/terms"> terms and condition</Link>
                </>
              }
            />
          </Form.Group>

          <Button disabled={!accepted} variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account ?<Link to="/login">Login</Link>
          </Form.Text> <br />
          {/* <Form.Text className="text-success">{success}</Form.Text> <br /> */}
          <Form.Text className="text-danger">{registerError}</Form.Text>
        </Form>
      </Container>
    
    </div>
  );
};

export default Register;
