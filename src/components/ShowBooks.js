import React, { useState } from 'react';

const ShowBooks = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Add logic to search for books based on the searchTerm (e.g., call an API)
    console.log('Searching for:', searchTerm);
    // Update searchResults with actual data
    setSearchResults([]);
  };

  const handleEditBook = (bookId) => {
    // Add logic to edit a specific book (e.g., navigate to edit page)
    console.log('Editing book with ID:', bookId);
  };

  const handleDeleteBook = (bookId) => {
    // Add logic to delete a specific book (e.g., call an API)
    console.log('Deleting book with ID:', bookId);
    // Update searchResults after deletion
    setSearchResults((prevResults) => prevResults.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <h2>Show Books</h2>
      <input
        type="text"
        placeholder="Search by ISBN or Book Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
      <ul>
        {/* Display searchResults as a list of books */}
        {searchResults.map((book) => (
          <li key={book.id}>
            {book.bookName} - ISBN: {book.isbn}
            <button type="button" onClick={() => handleEditBook(book.id)}>
              Edit
            </button>
            <button type="button" onClick={() => handleDeleteBook(book.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowBooks;
