import React, { useState } from 'react';

const Admin = () => {
  const [book, setBook] = useState({
    bookName: '',
    isbn: '',
    category: '',
    row: '',
    count: 0,
    cost: 0,
    availability: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleAddBook = () => {
    // Add logic to add book to the shelf (e.g., call an API)
    console.log('Adding book:', book);
    // Reset the book state after adding
    setBook({
      bookName: '',
      isbn: '',
      category: '',
      row: '',
      count: 0,
      cost: 0,
      availability: true,
    });
  };

  return (
    <div>
      <h2>Add Books to the Shelf</h2>
      <form>
        {/* Add input fields for book details */}
        <label>Book Name:</label>
        <input type="text" name="bookName" value={book.bookName} onChange={handleInputChange} />
        {/* Add other input fields similarly */}
        <button type="button" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Admin;
