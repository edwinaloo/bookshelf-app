import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import AdminPanel from './components/AdminPanel';
import AddBookModal from './components/AddBookModal';
import ShowBook from './components/ShowBook';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newBook, setNewBook] = useState({
    name: "",
    isbn: "",
    category: "",
    row: "",
    count: "",
    cost: "",
    availability: "",
  });
  const [selectedBook, setSelectedBook] = useState(null);
  const [showForm, setShowForm] = useState(false); // State to control form visibility

  const handleClose = () => {
    setShowModal(false);
    setSelectedBook(null);
    setShowForm(false); // Close the form when the modal is closed
  };

  const handleShow = () => {
    setShowModal(true);
    setShowForm(true); // Open the form when the modal is opened
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const addBook = () => {
    setBooks([...books, newBook]);
    setNewBook({
      name: "",
      isbn: "",
      category: "",
      row: "",
      count: "",
      cost: "",
      availability: "",
    });
    handleClose();
  };

  const removeBook = (isbn) => {
    const updatedBooks = books.filter((book) => book.isbn !== isbn);
    setBooks(updatedBooks);
  };

  const editBook = () => {
    const updatedBooks = books.map((book) =>
      book.isbn === selectedBook.isbn ? { ...book, ...newBook } : book
    );
    setBooks(updatedBooks);
    handleClose();
  };

  return (
    <div>
      <AdminPanel handleShow={handleShow} handleInputChange={handleInputChange} addBook={addBook} newBook={newBook} />
      <ShowBook books={books} removeBook={removeBook} editBook={setSelectedBook} />
      <AddBookModal
        showModal={showModal}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        addBook={addBook}
        editBook={editBook}
        selectedBook={selectedBook}
        newBook={newBook}
      />
      {showForm && (
        <Modal show={showForm} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={addBook}>
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
              <Button variant="primary" type="submit">
                Add Book
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default App;
