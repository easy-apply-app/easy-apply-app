import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";

export default class Name extends Component {
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
        

        <TextField
          label="Province"
          variant="filled"
          type="text"
          required
          //   value={email}
          onChange={(e) => (this.province = e.target.value)}
        />

        <TextField
          label="Classification"
          variant="filled"
          type="text"
          required
          //   value={email}
          onChange={(e) => (this.all = e.target.value)}
        />

        <TextField
          label="Bookmarked"
          variant="filled"
          type="text"
          required
          //   value={email}
          onChange={(e) => (this.all = e.target.value)}
        />

        <div>
        <Button>Apply</Button>
        </div>

       
      </form>
    );
  }
}
