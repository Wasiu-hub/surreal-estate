/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image from "../resources/estate.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={image} alt="estate-logo" />

      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="item" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="item" to="add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
