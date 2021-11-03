import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Form, Col } from "react-bootstrap";
import FetchKit from "../utils/fetchKit";

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token !== "undefined") {
      history.push("/todoPage");
    }
  }, [history]);

  function handleOnSubmit(e) {
    e.preventDefault();

    FetchKit.loginFetch(formData)
      .then((res) => res.json())
      .then((item) => {
        if (item) {
          localStorage.setItem("token", item.token);
          history.push("/todoPage");
        }
      });
  }

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Col
        md={{ span: 8, offset: 2 }}
        className="colorBackground lightText mt-5 p-5 rounded shadow"
      >
        <div className="container">
          <h1 className="ml-2 mt-5">
            Please log in to create your first Todo list!
          </h1>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onChange={handleOnChange}
                value={formData.email}
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
                name="password"
                onChange={handleOnChange}
                value={formData.password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="success" type="submit" size="lg">
              Submit
            </Button>
            <Button className="m-4" variant="warning" type="" size="lg">
              <Link to="/register"> Register </Link>
            </Button>
          </Form>
        </div>
      </Col>
    </>
  );
}

export default Login;
