import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div>
      <h1 className="ml-2 mt-2">Please log in!</h1>
      <br />
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
          Log In
        </button>
        <button className="" type="">
          <Link to="/register"> Register </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
