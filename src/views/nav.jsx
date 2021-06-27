import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Nav extends Component {
  handleLogout = () => {
    localStorage.clear();
    this.props.setUser(null);
  };

  render() {
    let buttons;

    if (this.props.user) {
      buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/"} onClick={this.handleLogout} className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to={"/login"}
              onClick={this.handleLogout}
              className="nav-link"
            >
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={"/register"}
              onClick={this.handleLogout}
              className="nav-link"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      );
      
    }
    return (
      <div>
        <button variant="contained" href="/">
          Home
        </button>
        <button variant="contained" href="/register">
          Sign Up
        </button>
        <button variant="contained" href="/login">
          Login
        </button>
      </div>
    );
  }
}
