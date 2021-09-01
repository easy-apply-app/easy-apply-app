// import React, { useState, useEffect } from 'react';
// import institutions from './api/institutions';


// export const App = () => {
//   const [list, setList] = useState(null);
  
//   useEffect(() => institutions.read().then(setList), [])
  
//   if (!list) return <div>Loading..</div>;

//   return (
//     <div>
//       {list.map(([{ id, name, photo, province, website, classification }]) => (
//         <div key={id}>
//           <h2>{name}</h2>
//           <img src={photo} alt="" />
//           <ul>
//             <li>{province}</li>
//             <li>{website}</li>
//             <li>{classification}</li>
//           </ul>

//         </div>
//       ))}
      
//       </div>
//   );
// };
//  export default App;


// import React, { Component } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import axios from "axios";
// import "./App.css";
// // import users  from "./api/web";
// // import Cms from "./api/cms";
// // import Web from "./api/web.jsx";
// import Home from "./views/Home";
// import Login from "./views/Login";
// // import Nav from "./views/Nav";
// import Register from "./views/Register";

// import Reset from "./views/Reset";
// import Name from "./views/Name";
// import Forgot from "./views/Forgot";
// import displaySearch from "../src/component/searchDAta/search";
// import Details from "./componentURL/Details";

// export default class App extends Component {
//   state = {};

//   //  [message, setMessage] = useState("")

//   // handleClick = (e) => {
//   //   this.setState({timeoutModal: false});
//   // }

//   // handleRegister = async () => {
//   //   const response = await users.register("namhlamthi21@gmail.com", "hello");
//   //   if (response instanceof Error) setState(response.toString());
//   // };

//   // handleLogIn = async () => {
//   //   users.register("namhlamthi21@gmail.com", "hello");
//   // };

//   componentDidMount() {
//     axios.get("user").then(
//       (res) => {
//         this.setState({
//           user: res.data,
//         });
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }

//   setUser = (user) => {
//     this.setState({
//       user: user,
//     });
//   };

//   render() {
//     return (
//       <BrowserRouter>
//         <div className="App">
//           {/* <Nav user={this.state.user} setUser={this.setUser} />

//           <div className="auth-wrapper">
//             <div className="auth-inner"> */}
//               <Switch>
//                 <Route
//                   exact
//                   path="/"
//                   component={() => <Home user={this.state.user} />}
//                 />
//                 <Route
//                   exact
//                   path="/login"
//                   component={() => <Login setUser={this.setUser} />}
//                 />
//                 <Route exact path="/register" component={Register} />
//                 <Route exact path="/forgot" component={Forgot} />
//                 <Route exact path="/reset" component={Reset} />
//                 <Route exact path="/name" component={Name} />
//                 <Route exact path="/" component={displaySearch} />
//                 <Route exact path="/componentURL/:id" component={Details} />
//               </Switch>

//               <Home />
//             {/* </div>
//           </div> */}
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// import React from "react";
// import { Switch, Route, BrowserRouter } from "react-router-dom";
// import Home from "./views/Home";
// import Register from "./views/Register";
// import LogIn from "./views/Login";
// import ResetPassword from "./views/Reset";
// import displaySearch from "../src/component/searchDAta/search";
// import Details from "./componentURL/Details";

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
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
import Details from "./componentURL/Details";

import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
           <Route exact path="/forgot" component={Forgot} />
           <Route exact path="/reset" component={Reset} />
           <Route exact path="/name" component={Name} />
           <Route exact path="/" component={displaySearch} />
           <Route exact path="/componentURL/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
