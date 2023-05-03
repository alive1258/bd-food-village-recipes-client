import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container className="mt-4 py-4">
      <h1>term and conditions</h1>
      <p>
        {" "}
        You may not use any “deep-link”, “page-scrape”, “robot”, “spider” or
        other automatic devices, program, algorithm or methodology, or any
        similar or equivalent manual process, to access, acquire, copy or
        monitor any portion of the website or any content, or in any way
        reproduce or circumvent the navigational structure or presentation of
        the website or any content, to obtain or attempt to obtain any
        materials, documents or information through any means not purposely made
        available through the website. We reserve our right to bar any such
        activity.{" "}
      </p>
      <p>
        We receive and store any information you enter on our website or give us
        in any other way. We use the information that you provide for such
        purposes as responding to your requests, customizing future shopping for
        you, improving our stores, and communicating with you.
      </p>
      <p>Go back to <Link to='/register'>Register</Link></p>
    </Container>
  );
};

export default Terms;
