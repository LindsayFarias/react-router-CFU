import './App.css';
import { Navbar, Container, Nav } from "react-bootstrap";
import Home from "./Home";
import Cart from "./Cart";
import Products from "./Products";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">SDI 7 Shopping Center</Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/products">Products</Link></Nav.Link>
                  <Nav.Link><Link to="/cart">Cart</Link></Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      </header>
      <main className="main text-center">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/products" component={Products}/>
          <Route exact path="/cart" component={Cart}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
