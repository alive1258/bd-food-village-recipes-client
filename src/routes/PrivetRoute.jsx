import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router";
import { Spinner } from "react-bootstrap";

const PrivetRoute = ({ children }) => {
  const { user ,loading} = useContext(AuthContext);
  const location = useLocation();
//   console.log(location);
 
  if(loading){
    return   <Spinner animation="border" variant="primary" />
  }

  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivetRoute;
