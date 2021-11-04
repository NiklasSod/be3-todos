import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

export default function EditTodo(props) {

  const [formOneData, setFormOneData] = useState({
    header: "",
    content: "",
  });

  const handleOnUpdate = (e) => {
    setFormOneData({ ...formOneData, [e.target.name]: e.target.value });
  };

  function handleOnSave(id) {
    axios.post(`http://127.0.0.1:5000/api/todoroute/${id}`, {
      header: formOneData.header,
      content: formOneData.content,
    });
  } 

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit your Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">
              Header:
            </label>
            <input onChange={handleOnUpdate} name="header" type="text" className="form-control" id="recipient-name" defaultValue={!props.showtodo ? "Loading..." : props.showtodo.header } />
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">
              Content:
            </label>
            <textarea onChange={handleOnUpdate} name="content" className="form-control" id="message-text" defaultValue={!props.showtodo ? "Loading..." : props.showtodo.content }></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOnSave(!props.showtodo ? null : props.showtodo._id), props.onHide } >Update</Button>
      </Modal.Footer>
    </Modal>
  );
}
