import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, Col }from "react-bootstrap";
import FetchKit from "../utils/fetchKit";

function Register() {
  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    FetchKit.registerFetch(formData)
      .then((res) => res.json())
      .then((item) => {
        if (item) {
          localStorage.setItem("token", item.token);
          history.push("/todoPage");
        }
      });
  };

  return (
    <>
    <Col md={{ span: 8, offset: 3 }} className="colorBackground lightText mt-5 p-5 rounded shadow">
      <h1 className="ml-2 mt-2">Please register!</h1>
      <br />
      <div className="container">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control           
            className="col-md-5"
            name="name"
            required
            type="text" 
            placeholder="Enter your name"
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            className="col-md-5"
            name="email"
            required
            type="email" 
            placeholder="Enter email" 
          />
          <Form.Text className="text-muted">
          We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          className="col-md-5"
          name="password"
          type="password"
          placeholder="Password" 
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Button className="m-4" variant="outline-warning" type="" size="lg">
          <Link to="/login"> Login </Link>
        </Button>
      </Form>
      </div>
      </Col>
    </>
  );
}

export default Register;
