import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <ul
        style={{
          height: "60px",
          background: "#c7ff3c",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          listStyle: "none",
        }}
      >
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeStyle={activeStyle}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/gallery" activeStyle={activeStyle}>
            Gallery
          </NavLink>
        </li>
      </ul>
    );
  }
}
let activeStyle = {
  color: "white"
};
