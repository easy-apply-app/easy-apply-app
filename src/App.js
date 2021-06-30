import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
// import users  from "./api/web";
// import Cms from "./api/cms";
// import Web from "./api/web.jsx";
import Home from "./views/Home";
import Login from "./views/Login";
import Nav from "./views/Nav";
import Register from "./views/Register";

import Reset from "./views/Reset";
import Name from "./views/Name";
import Forgot from "./views/Forgot";
import displaySearch from "../src/component/searchDAta/search";
import Details from "./componentURL/Details";

export default class App extends Component {
  state = {};

  //  [message, setMessage] = useState("")

  // handleClick = (e) => {
  //   this.setState({timeoutModal: false});
  // }

  // handleRegister = async () => {
  //   const response = await users.register("namhlamthi21@gmail.com", "hello");
  //   if (response instanceof Error) setState(response.toString());
  // };

  // handleLogIn = async () => {
  //   users.register("namhlamthi21@gmail.com", "hello");
  // };

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
    );
  }

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav user={this.state.user} setUser={this.setUser} />

          <div className="auth-wrapper">
            <div className="auth-inner">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={() => <Home user={this.state.user} />}
                />
                <Route
                  exact
                  path="/login"
                  component={() => <Login setUser={this.setUser} />}
                />
                <Route exact path="/register" component={Register} />
                <Route exact path="/forgot" component={Forgot} />
                <Route exact path="/reset" component={Reset} />
                <Route exact path="/name" component={Name} />
                <Route exact path="/" component={displaySearch} />
                <Route exact path="/componentURL/:id" component={Details} />
              </Switch>

              <Home />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
