import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin';
import ShowBooks from './components/ShowBooks';
import ShowBook from './components/ShowBook';
import QrScanner from './components/QrScanner';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/show-books" component={ShowBooks} />
        <Route path="/show-book/:id" component={ShowBook} />
        <Route path="/qr-scanner" component={QrScanner} />
      </Switch>
    </Router>
  );
}

export default App;


