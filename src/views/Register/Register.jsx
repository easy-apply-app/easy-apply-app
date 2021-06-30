import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class Register extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      password_confirm: this.confirmPassword,
    };

    axios
      .post("http://localhost:8000/register", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        this.setState({
          message: err.response.data.message,
        });
      });
  };

  render() {
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

        <h3>Sign up</h3>

        <TextField
          label="First Name"
          variant="outlined"
          type="text"
          required
          //   value={email}
          onChange={(e) => (this.first_name = e.target.value)}
        />

        <TextField
          label="Last Name"
          variant="outlined"
          type="text"
          required
          //   value={email}
          onChange={(e) => (this.last_name = e.target.value)}
        />

        <TextField
          label="Age"
          variant="outlined"
          type="number"
          required
          //   value={email}
          onChange={(e) => (this.age = e.target.value)}
        />

        <TextField
          label="Gender"
          variant="outlined"
          type="text"
          required
          //   value={email}
          onChange={(e) => (this.gender = e.target.value)}
        />

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          required
          //   value={email}
          onChange={(e) => (this.email = e.target.value)}
        />

        <TextField
          label="Password"
          variant="outlined"
          type="Password"
          required
          //   value={email}
          onChange={(e) => (this.password = e.target.value)}
        />

        <TextField
          label="Confirm Password"
          variant="outlined"
          type="confirm password"
          required
          //   value={email}
          onChange={(e) => (this.confirm_password = e.target.value)}
        />
        <div>
          <Button variant="contained" href="/">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" href="/login">
          Sign up
        </Button>
        </div>

        
      </form>
    );
  }
}



