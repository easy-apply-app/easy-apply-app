import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default class Login extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password,
    };

    axios
      .post("login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        this.setState({
          loggedIn: true,
        });
        this.props.setUser(res.data.user);
      })
      .catch((err) => {
        this.setState({
          message: err.response.data.message,
        });
      });
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to={"/"} />;
    }

    let error = "";

    if (this.state.message) {
      error = (
        <div className="alert alert-danger" role="alert">
          {this.state.message}
        </div>
      );
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {error}
        <h3>Login</h3>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          //   value={email}
          onChange={(e) => (this.email = e.target.value)}
        />

        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          //   value={email}
          onChange={(e) => (this.password = e.target.value)}
        />

        <div>
          <Button variant="contained" href="/">
            Cancel
          </Button>
          {/* <Button variant="contained" color="primary" type="submit">
            Login
          </Button> */}
          <Button type="submit" variant="contained" color="primary" href="/searchDAta">
          Login
        </Button>
        </div>

         

        <p className="forgot-password text-right">
          <Link to={"/error"}>Forgot password?</Link>
        </p>
      </form>
    );
  }
}
