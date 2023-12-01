// App.js

import React, { useState } from "react";
import AdminPanel from './components/AdminPanel';
import AddBookModal from './components/AddBookModal';
import ShowBook from './components/ShowBook';
// import BookList from "./components/BooksList";

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

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const addBook = () => {
    setBooks([...books, newBook]);
    handleClose();
  };

  const removeBook = (isbn) => {
    const updatedBooks = books.filter((book) => book.isbn !== isbn);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <AdminPanel handleShow={handleShow} />
      <ShowBook books={books} removeBook={removeBook} />
      <AddBookModal
        showModal={showModal}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        addBook={addBook}
      />
    </div>
  );
};

export default App;
