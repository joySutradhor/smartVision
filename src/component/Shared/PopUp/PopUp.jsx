import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "../../Contact/GetTuch/Form";
import "./PopUp.css";
const PopUp = ({ show, handleClose }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header className="" closeButton>
          <Modal.Title>
            <h3>Order Service</h3>
          </Modal.Title>
          <button onClick={handleClose} className="close-button">
            X
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form></Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button
            className="btn btn-outline-danger bg-white rounded-pill"
            onClick={handleClose}
          >
            X
          </Button>
          <Button className="bg-primary" onClick={handleClose}>
            Contact
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default PopUp;
