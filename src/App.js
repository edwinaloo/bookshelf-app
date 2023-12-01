import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/Admin';
import ShowBooks from './components/ShowBooks';
import ShowBook from './components/ShowBook';
import QrScanner from './components/QrScanner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/show-books" element={<ShowBooks />} />
        <Route path="/show-book/:id" element={<ShowBook />} />
        <Route path="/qr-scanner" element={<QrScanner />} />
      </Routes>
    </Router>
  );
}

export default App;
