import React, { useState, useEffect } from "react";

function TodoPage() {
  const [todos, setTodo] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:5000/api/todoRoute/");
    const data = await response.json();
    setTodo(data);
  }

  const showTodos = () => {
    return (
      todos.data.map((todo) => (
        <div className="col m-3" key={todo._id}>
          {todo.header}
        </div>
      ))
    );
  };

  return (
    <div>
      {!todos ? "Loading..." : showTodos()}
      <form>
        <input type="text" className="todo-input"/>
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    </div>
  );
}

export default TodoPage;
