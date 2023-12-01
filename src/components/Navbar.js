// Navbar.js

import React from 'react';

const Navbar = () => {
  return (
    <ul style={navbarStyle}>
      <li style={listItemStyle}><a href="#home">Home</a></li>
      <li style={listItemStyle}><a href="#news">News</a></li>
      <li style={listItemStyle}><a href="#contact">Contact</a></li>
      <li style={listItemStyle}><a href="#about">About</a></li>
    </ul>
  );
};

// Define styles
const navbarStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  backgroundColor: '#333',
};

const listItemStyle = {
  display: 'inline',
};

export default Navbar;
