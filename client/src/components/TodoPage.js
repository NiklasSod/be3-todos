import React, { useState, useEffect } from "react";

function TodoPage() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:3001/todo/");
    const data = await response.json();

    setTodo(data.message);
  }

  return (
    <div>
      <p>Here is todos!</p>
      <p>{!todo ? "test-string" : todo}</p>
    </div>
  );
}

export default TodoPage;
