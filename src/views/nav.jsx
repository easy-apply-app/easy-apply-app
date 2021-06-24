import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
            <Link to={"/login"} onClick={this.handleLogout} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/register"} onClick={this.handleLogout} className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div>
         
          <Button variant="contained" href="/">Home</Button>
          <Button variant="contained" href="/register">Sign Up</Button>
          <Button variant="contained" href="/login">Login</Button>
          
        </div>
      </nav>
    );
  }
}
