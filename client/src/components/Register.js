import React, { useState, useEffect } from "react";

function Register() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/register/")
      .then((res) => res.json())
      .then((data) => setUsers(data.message));
  });

  return (
    <div>
      <p>{!users ? "Loading..." : users}</p>
    </div>
  );
}

export default Register;
