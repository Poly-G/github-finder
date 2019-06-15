import React from "react";
import PropTypes from "prop-types";
import UserItem from "../users/UserItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </ul>
    </nav>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default Navbar;
