
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
// import users  from "./api/web";
// import Cms from "./api/cms";
// import Web from "./api/web.jsx";
import Home from "./views/Home";
import Login from "./views/Login";
// import Nav from "./views/Nav";
import Register from "./views/Register";

import Reset from "./views/Reset";
import Name from "./views/Name";
import Forgot from "./views/Forgot";
import displaySearch from "../src/component/searchDAta/search";


import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
           <Route exact path="/forgot" component={Forgot} />
           <Route exact path="/reset" component={Reset} />
           <Route exact path="/name" component={Name} />
           <Route exact path="/displaySearch" component={displaySearch} />
         
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
