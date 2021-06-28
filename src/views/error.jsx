import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

class Error extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: this.email,
    };

    axios
      .post("forgot", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Forgot Password</h3>

        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          //   value={email}
          onChange={(e) => (this.email = e.target.value)}
        />

        <div>
          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}
export default Error;
