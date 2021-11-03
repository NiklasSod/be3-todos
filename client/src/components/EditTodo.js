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
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">
              Header:
            </label>
            <input type="text" class="form-control" id="recipient-name" />
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">
              Content:
            </label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
}
