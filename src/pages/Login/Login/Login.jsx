import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { GoogleAuthProvider ,getAuth, signInWithPopup} from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Login = () => {
    const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location page", location);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });


  };


    const handleGoogleSignIn = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log(user);
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
              required
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Password"
            />
          </Form.Group>

          <Button className="w-25" variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Button
            onClick={handleGoogleSignIn}
            className="mt-2 w-25"
            variant="info"
          >
            Google
          </Button>
          <br />
          <Form.Text className="text-secondary ">
            Don't Have an Account ?<Link to="/register">Register</Link>
          </Form.Text>
          <Form.Text className="text-success"></Form.Text>
          <Form.Text className="text-danger"></Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
