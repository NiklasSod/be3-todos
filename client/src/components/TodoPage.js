import React, { useState, useEffect } from "react";

function TodoPage() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:5000/api/todoRoute/");
    const data = await response.json();

    setTodo(data.message);
  }

  return (
    <div>
      <p>Here is todos!</p>
      <p>{!todo ? "test-string" : todo}</p>
    <form>
      <input type="text" className="todo-input"/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </div>
  );
}

export default TodoPage;
