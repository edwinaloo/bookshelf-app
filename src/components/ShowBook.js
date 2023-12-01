import React from "react";
import BookList from './BooksList';

const ShowBook = ({ books, removeBook }) => (
  <div>
    <h1>Show Book</h1>
    <BooksList books={books} removeBook={removeBook} />
  </div>
);

export default ShowBook;
