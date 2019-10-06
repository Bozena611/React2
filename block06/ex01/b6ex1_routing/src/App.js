import React from "react";
import About from "./About";
import Home from "./Home";
import Gallery from "./Gallery";
import Contact from "./Contact";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
}
