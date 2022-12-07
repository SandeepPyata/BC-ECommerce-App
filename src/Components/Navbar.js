import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div id="navbar-block">
      <NavLink
        to="/"
        id="navbar-product"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bolder" : "normal",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/products/1"
        id="navbar-product"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bolder" : "normal",
        })}
      >
        Product
      </NavLink>
    </div>
  );
};
export default Navbar;
