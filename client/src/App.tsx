import { createContext } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Navbar from "./components/navbar";

function Index() {
  return <h2>This should show catgeories</h2>;
}

function Product() {
  return <h2>This is a page for product with ID</h2>;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products/1">First Product</Link>
              </li>
              <li>
                <Link to="/products/2">Second Product</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/products/:id" component={Product} />
        </div>
      </Router>
    </div>
  );
}

export default App;
