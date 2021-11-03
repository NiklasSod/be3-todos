import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Accordion, Alert, Button } from "react-bootstrap";
import axios from "axios";

function TodoPage() {
  const history = useHistory();
  const [todos, setTodo] = useState(null);

  const [formData, setFormData] = useState({
    header: "",
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/api/todoroute/", {
      header: formData.header,
    });
    history.go(0);
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteTodo = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/todoroute/${id}`);
    history.go(0);
  };

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
              <div className="d-flex justify-content-around">
                <Button className="btn-primary btn-sm">Edit</Button>
                <Button
                  type="submit"
                  className="btn-danger btn-sm"
                  onClick={() => deleteTodo(todo._id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    ));
  };

  return (
    <div>
      <form className="m-5" onSubmit={handleOnSubmit}>
        <input
          type="text"
          className="todo-input"
          name="header"
          placeholder="Enter todo header"
          onChange={handleOnChange}
          value={formData.header}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      {!todos ? "Loading..." : <div> {showTodos()} </div>}
    </div>
  );
}

export default TodoPage;
