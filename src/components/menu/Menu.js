import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Menu.css";
import KwitterLogo from "../../assets/images/Kwitter_square.png";

export const Menu = ({ isAuthenticated, logout }) => {
  return (
    <div id="menu">
      <img id="KwitterLogo" src={KwitterLogo} alt="KwitterLogo" />
      {isAuthenticated && (
        <div id="menu-links">
          <Link to="/profiles/:username">Home</Link>
          <Link to="/messagefeed">Message Feed</Link>
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

Menu.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};
