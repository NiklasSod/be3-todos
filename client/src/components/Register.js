import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Container from 'react-bootstrap/Container';

function Register() {
  const [setData, getData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/register/")
      .then((res) => res.json())
      .then((data) => getData(data.message));
  });

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    fetch("http://localhost:3001/register/", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/login");
  }

  return (
    <>
      <p>{!setData ? "Loading..." : setData}</p>
      <h1 className="ml-2 mt-2">Please register!</h1>
      <br />
      <div className="container">
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control           
            id="name"
            name="name"
            onChange={handleOnChange}
            value={formData.name}
            className="col-md-5"
            type="text" 
            placeholder="Enter your name"
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            id="email"
            name="email"
            onChange={handleOnChange}
            value={formData.email}
            className="col-md-5"
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
          id="password"
          name="password"
          onChange={handleOnChange}
          value={formData.password}
          className="col-md-5"
          type="password"
          placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      </div>
    </>
  );
}

export default Register;
