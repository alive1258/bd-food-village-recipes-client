import React from "react";
import { Container } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="mt-4" style={{ height: "70vh" }}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                Tell us the differences between uncontrolled and controlled
                components.
              </h5>
              <p className="card-text">
                In React, controlled components refer to components that have
                their state and behavior controlled by the parent component.
                These components rely on props passed down from the parent
                component to update their state and behavior. Uncontrolled
                components refer to components that manage their own state
                internally.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                How to validate React props using PropTypes
              </h5>
              <p className="card-text">
                With React props, you can send data to a component when you call
                on that component, including numbers, strings, functions,
                objects, and arrays. If you have multiple components, you can
                pass data from one component to another. When developing a React
                application, you’ll need to structure and define your props to
                avoid bugs and errors. Just like a function might have mandatory
                arguments, a React component might require a prop to be defined,
                otherwise, it will not render properly.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                Tell us the difference between nodejs and express js.
              </h5>
              <p className="card-text">
                Node.js: Node.js is an open source and cross-platform runtime
                environment for executing JavaScript code outside of a browser.
                You need to remember that NodeJS is not a framework and it’s not
                a programming language. Most of the people are confused and
                understand it’s a framework or a programming language. We often
                use Node.js for building back-end services like APIs like Web
                App or Mobile App. It’s used in production by large companies
                such as Paypal, Uber, Netflix, Walmart and so on.
              </p>
              <p>
                Express.js: Express is a small framework that sits on top of
                Node.js’s web server functionality to simplify its APIs and add
                helpful new features. It makes it easier to organize your
                application’s functionality with middle ware and routing. It
                adds helpful utilities to Node.js’s HTTP objects. It facilitates
                the rendering of dynamic HTTP objects.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">
                What is a custom hook, and why will you create a custom hook?
              </h5>
              <p className="card-text">
                Custom Hook is a JavaScript function which we create by
                ourselves, when we want to share logic between other JavaScript
                functions. It allows you to reuse some piece of code in several
                parts of your app.
              </p>
              <p>
                The main reason to write a custom hook is for code reusability.
                For example, instead of writing the same code across multiple
                components that use the same common stateful logic (say a
                “setState” or localStorage logic), you can put that code inside
                a custom hook and reuse it. With Hooks, you can extract stateful
                logic from a component so it can be tested independently and
                reused. Hooks allow you to reuse stateful logic without changing
                your component hierarchy. This makes it easy to share Hooks
                among many components or with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
