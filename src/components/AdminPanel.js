import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AdminPanel = ({ handleShow, addBook }) => {
  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [newBook, setNewBook] = useState({
    name: "",
    isbn: "",
    category: "",
    row: "",
    count: "",
    cost: "",
    availability: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBook = () => {
    addBook(newBook);
    setNewBook({
      name: "",
      isbn: "",
      category: "",
      row: "",
      count: "",
      cost: "",
      availability: "",
    });
    setShowForm(false); // Close the form after adding the book
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <Button variant="primary" onClick={() => setShowForm(true)}>
        Add New Book
      </Button>

      {/* Book Form */}
      <Modal show={showForm} onHide={() => setShowForm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Add form fields for new book details */}
            <Form.Group controlId="formBookName">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter book name"
                name="name"
                value={newBook.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Add other form fields for ISBN, category, row, count, cost, availability */}
            {/* ... */}

            <Button variant="primary" onClick={handleAddBook}>
              Add Book
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminPanel;
