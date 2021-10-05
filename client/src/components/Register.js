import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

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
    history.push("/");
  }

  return (
    <div>
      <p>{!setData ? "Loading..." : setData}</p>
      <h1 className="ml-2 mt-2">Please register!</h1>
      <br />
      <form onSubmit={handleOnSubmit}>
        <label className="col-md-2">Name:</label>
        <input
          id="name"
          name="name"
          onChange={handleOnChange}
          value={formData.name}
          className="col-md-5"
        />
        <p className="col-md-5" />
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
        <input
          className="col-md-2 btn btn-primary"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Register;
