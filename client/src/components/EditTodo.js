import React from "react";
import { Button, Modal } from "react-bootstrap";

export default function EditTodo(props) {
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
            <input type="text" className="form-control" id="recipient-name" value={!props.showTodo ? "Loading..." : props.showTodo.header } />
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">
              Content:
            </label>
            <textarea className="form-control" id="message-text">{!props.showTodo ? "Loading..." : props.showTodo.content }</textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}
