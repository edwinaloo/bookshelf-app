import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddBookModal = ({ showModal, handleClose, handleInputChange, addBook, editBook, selectedBook, newBook }) => {
  const isEditMode = !!selectedBook;

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{isEditMode ? "Edit Book" : "Add New Book"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBookName">
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book name"
              name="name"
              value={isEditMode ? selectedBook.name : newBook.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Add other form fields for ISBN, category, row, count, cost, availability */}
          {/* ... */}
          <Button variant="primary" onClick={isEditMode ? editBook : addBook}>
            {isEditMode ? "Edit Book" : "Add Book"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;
