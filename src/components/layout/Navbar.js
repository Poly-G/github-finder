import React from "react";
import PropTypes from "prop-types";
import UserItem from "../users/UserItem";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="fab fa-github" /> GitHub Finder
      </h1>
    </nav>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default Navbar;
