import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, logout }) {
  return (
    <div className="navbar">
      <div className="navbar__brand">
        <Link to="/">ShodIccha</Link>
      </div>
      <div className="navbar__items">
        <Link to="/">Home</Link>
        <Link to="/activities">Activities</Link>

        {user && user.isAuthenticated ? (
          <>
            <Link to="/createpost">Create</Link>
            <Link to="/contact">Help Requests</Link>
            <Link
              to="/login"
              onClick={() => {
                logout(user);
              }}
            >
              Logout
            </Link>
            <Link
              to="/"
              style={{
                background: "var(--blue-light)",
                color: "var(--blue-dark)",
                borderRadius: "0 8px 0 8px",
                fontWeight: "bold",
              }}
            >
              {user.user.username}
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {/* <Link to="/">{user.user.username}</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
