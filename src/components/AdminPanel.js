// AdminPanel.js

import React from "react";
import { Button } from "react-bootstrap";

const AdminPanel = ({ handleShow }) => (
  <div>
    <h1>Admin Panel</h1>
    <Button variant="primary" onClick={handleShow}>
      Add New Book
    </Button>
  </div>
);

export default AdminPanel;
