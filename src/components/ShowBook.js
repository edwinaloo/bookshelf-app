// ShowBook.js

import React from "react";
import BookList from "./BookList";

const ShowBook = ({ books, removeBook }) => (
  <div>
    <h1>Show Book</h1>
    <BookList books={books} removeBook={removeBook} />
  </div>
);

export default ShowBook;
