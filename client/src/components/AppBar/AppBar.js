import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./AppBar.css";
const NavBar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const apiLinks = (
    <ul>
      <li>
        <Link to="/create-recipe">Create</Link>
      </li>

      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      <li>
        <Link to="/login" onClick={logout}>
          Logout
        </Link>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Recipe App</Link>
          </Typography>
          {!loading && (
            <Typography>{isAuthenticated ? apiLinks : guestLinks}</Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavBar);
