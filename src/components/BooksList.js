// BookList.js

import React from "react";
import Book from "./Book";

const BooksList = ({ books, removeBook }) => (
  <div>
    {books.map((book) => (
      <Book key={book.isbn} book={book} removeBook={removeBook} />
    ))}
  </div>
);

export default BooksList;
