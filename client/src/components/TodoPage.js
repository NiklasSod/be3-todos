import React, { useState, useEffect } from "react";

function TodoPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/todoPage/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });

  return (
    <div>
      <p>Here is todos!</p>
      <p>{!data ? "test-string" : data}</p>
    </div>
  );
}

export default TodoPage;
