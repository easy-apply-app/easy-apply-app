import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
// import users  from "./api/web";
// import Cms from "./api/cms";
// import Web from "./api/web.jsx";
import Home from "./views/home";
import Login from "./views/login";
import Nav from "./views/nav";
import Register from "./views/register";

import  Reset  from "./views/reset";
import Name from "./views/name";
import Forgot from "./views/forgot";



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
                <Route exact path="/login" component={() => <Login setUser={this.setUser} />}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/forgot" component={Forgot}/>
                <Route exact path="/reset" component={Reset}/>
                <Route exact path="/name" component={Name}/>
                
              </Switch>

              <Home />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
