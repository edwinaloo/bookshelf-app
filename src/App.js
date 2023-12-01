import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Admin from './components/Admin';
import ShowBooks from './components/ShowBooks';
import ShowBook from './components/ShowBook';
import QrScanner from './components/QrScanner';
import Navbar from './components/Navbar';
import QrCodeGenerator from './components/QrCodeGenerator';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/admin" component={Admin} />
        <Route path="/qr-scanner" component={QrScanner} />
        <Route path="/show-books" component={ShowBooks} />
        <Route path="/show-book/:id" component={ShowBook} />
        <Route path="/qr-code/:id" component={QrCodeGenerator} />
      </div>
    </Router>
  );
}

export default App;
