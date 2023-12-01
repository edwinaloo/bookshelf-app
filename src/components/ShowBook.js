import React from 'react';

const ShowBook = ({ match }) => {
  const bookId = match.params.id;

  // Add logic to fetch individual book details based on bookId (e.g., call an API)
  const bookDetails = {
    id: bookId,
    bookName: 'Sample Book',
    isbn: '1234567890',
    category: 'Fiction',
    row: 'A',
    count: 5,
    cost: 20,
    availability: true,
  };

  return (
    <div>
      <h2>Book Details</h2>
      <p>Name: {bookDetails.bookName}</p>
      <p>ISBN: {bookDetails.isbn}</p>
      <p>Category: {bookDetails.category}</p>
      <p>Row: {bookDetails.row}</p>
      <p>Count: {bookDetails.count}</p>
      <p>Cost: {bookDetails.cost}</p>
      <p>Availability: {bookDetails.availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
};

export default ShowBook;
