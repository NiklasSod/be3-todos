import React, { useState, useEffect } from "react";
import { Accordion, Alert } from "react-bootstrap";

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
    return todos.data.map((todo) => (
      <Accordion key={todo._id} className="d-flex justify-content-center m-3">
        <Accordion.Item eventKey="0" className="col-md-5">
          <Accordion.Header>{todo.header}</Accordion.Header>
          <Accordion.Body id="accordionBody">
            <div className="label">
              <Alert variant="primary">
                <p>{`Content: ${todo.content}`}</p>
              </Alert>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ));
  };

  return (
    <div>
      <form className="m-5">
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      {!todos ? "Loading..." : <div> {showTodos()} </div>}
    </div>
  );
}

export default TodoPage;
