import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar-block">
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontSize: isActive ? "120%" : "100%",
          fontWeight: isActive ? "bolder" : "normal",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/products/:id"
        style={({ isActive }) => ({
          fontSize: isActive ? "120%" : "100%",
          fontWeight: isActive ? "bolder" : "normal",
        })}
      >
        Product
      </NavLink>
    </div>
  );
};
export default Navbar;
