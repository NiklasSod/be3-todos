import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users/")
      .then((res) => res.json())
      .then((data) => setUsers(data.message));
  });

  return (
    <div>
      <p>{!users ? "Loading..." : users}</p>
    </div>
  );
}

export default Users;
