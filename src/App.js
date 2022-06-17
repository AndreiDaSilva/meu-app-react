import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './componets/Navbar';
import Home from './pages/Home';
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Header from './componets/layout/Header';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
