import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./App.css";
import Home from "./account/Home";
import Login from "./account/Login";
import Nav from "./account/Nav";
import Register from "./account/Register";

export default class App extends Component {
  state = {};
  componentDidMount() {
    axios.get("user").then(
      (res) => {
        this.setState({
          user: res.data,
        });
      },
      (err) => {
        console.log(err);
      }
    )
  };

setUser = user => {
  this.setState({
    user: user,
  });
}

  render() {
    return (
      <BrowserRouter>

        <div className="App">

          <Nav user={this.state.user} setUser={this.setUser}/>

          <div className="auth-wrapper">

            <div className="auth-inner">
              <Switch>
                <Route exact path="/" component={() => <Home user={this.state.user} />}/>
                <Route exact path="login" component={() => <Login setUser={this.setUser} />}/>
                <Route exact path="register" component={() => <Register user={this.state.user} />}/>
              </Switch>
              
              <Home />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
