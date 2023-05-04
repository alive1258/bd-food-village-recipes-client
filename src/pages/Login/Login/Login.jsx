import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const providerGoogle = new GoogleAuthProvider();
  const providerGitHub = new GithubAuthProvider();

  const [userInfos, setUserInfos] = useState(null);
  const [logInError, setLogInError] = useState("");

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location page", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setLogInError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // form.reset("");

    if (email === "") {
      setLogInError("please fill up your email");
      return;
    } else if (password === "") {
      setLogInError("please fill up your password");
      return;
    } else if (password.length < 6) {
      setLogInError("please add at least 6 characters in your password");
      return;
    }
    // else if(email !== email){
    //     setLogInError('email dose not match');
    //     return;
    // }
    // else if(password !== password){
    //     setLogInError('password dose not match');
    //     return;
    // }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUserInfos(loggedUser);
        navigate(from, { replace: true });
        setLogInError("");
      })
      .catch((error) => {
        console.log(error.massage);
        setLogInError(error.massage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, providerGoogle)
      .then((result) => {
        const userLogIn = result.user;
        console.log(userLogIn);
        setUserInfos(userLogIn);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, providerGitHub)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUserInfos(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  return (
    <div>
      <h3 className="text-center">Please Login</h3>
      <Container className="row d-flex mx-auto justify-content-center">
        <Form className="col-md-6 " onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
               
              placeholder="Password"
            />
          </Form.Group>
          <Button className="w-25 mt-2 me-2" variant="primary" type="submit">
            Login
          </Button>
          <Button
            onClick={handleGoogleSignIn}
            className="mt-2 w-25 me-2"
            variant="info"
          >
            Google
          </Button>
          <Button
            onClick={handleGitHubSignIn}
            className="w-25 mt-2 me-2"
            variant="secondary"
            type="submit"
          >
            GitHub
          </Button>
          <br />
          <Form.Text className="text-secondary ">
            Don't Have an Account ?<Link to="/register">Register</Link>
          </Form.Text>{" "}
          <br />
          <Form.Text className="text-success"></Form.Text> <br />
          <Form.Text className="text-danger">{logInError}</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
