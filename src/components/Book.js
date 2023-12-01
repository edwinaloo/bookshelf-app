// Install necessary packages using npm
// npm install react-bootstrap qrcode.react

// Book.js

import React from "react";
import { Button } from "react-bootstrap";
import QRCode from "qrcode.react";

const Book = ({ book, removeBook }) => (
  <div>
    <h2>{book.name}</h2>
    <p>ISBN: {book.isbn}</p>
    <p>Category: {book.category}</p>
    <p>Row: {book.row}</p>
    <p>Count: {book.count}</p>
    <p>Cost: {book.cost}</p>
    <p>Availability: {book.availability}</p>
    <QRCode value={book.isbn} />
    <Button variant="danger" onClick={() => removeBook(book.isbn)}>
      Remove
    </Button>
  </div>
);

export default Book;
