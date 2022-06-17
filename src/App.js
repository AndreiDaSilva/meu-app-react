import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Header from './componets/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
