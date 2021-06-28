import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Redirect } from "react-router";

class Reset extends Component {
  state = {};

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      token: this.props.match.params.id,
      password: this.password,
      password_confirm: this.password_confirm,
    };
    axios
      .post("reset", data)
      .then((res) => {
        console.log(res);
        this.setState({
          reset: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.reset) {
      return <Redirect to={"/login"} />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Reset Password</h3>

        <TextField
          label="Password"
          variant="filled"
          type="password"
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
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}
export default Reset;
