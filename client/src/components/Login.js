import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Container from 'react-bootstrap/Container';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const history = useHistory();

  function handleOnSubmit(e) {
    e.preventDefault();
    history.push("/todoPage");
  }

  return (
    <>

    <div className="container">
      <h1 className="ml-2 mt-5">Please log in!</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            // id="email"
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
            // id="password"
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
      {/* <button className="col-md-2 btn btn-primary" id="login" type="submit">Login</button>
      <button className="col-md-2 btn btn-primary" id = "register"type="submit">Register</button>
      <form onSubmit={handleOnSubmit}>
        <label className="col-md-2">Email:</label>
        <input
          id="email"
          name="email"
          onChange={handleOnChange}
          value={formData.email}
          className="col-md-5"
        />
        <p className="col-md-5" />
        <label className="col-md-2">Password:</label>
        <input
          id="password"
          name="password"
          onChange={handleOnChange}
          value={formData.password}
          className="col-md-5"
          type="password"
        />
        <p className="col-md-5" />
        <br />
        <button className="col-md-2 btn btn-primary" type="submit">
          Submit
        </button>
        <button className="" type="">
          <Link to="/register"> Register </Link>
        </button>
      </form> */}
        
    </>
  );
}

export default Login;
