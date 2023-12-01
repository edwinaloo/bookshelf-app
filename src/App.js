import React, { useState } from "react";
import AdminPanel from './components/AdminPanel';
import AddBookModal from './components/AddBookModal';
import ShowBook from './components/ShowBook';

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

  const handleClose = () => {
    setShowModal(false);
    setSelectedBook(null); // Reset selectedBook when closing the modal
  };

  const handleShow = () => setShowModal(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const addBook = () => {
    setBooks([...books, newBook]);
    setNewBook({
      name: "", // Set to an empty string for the next new book
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
      <AdminPanel handleShow={handleShow} />
      <ShowBook books={books} removeBook={removeBook} editBook={setSelectedBook} />
      <AddBookModal
        showModal={showModal}
        handleClose={handleClose}
        handleInputChange={handleInputChange}
        addBook={addBook}
        editBook={editBook}
        selectedBook={selectedBook}
        newBook={newBook} // Pass newBook to the modal for default values
      />
    </div>
  );
};

export default App;
