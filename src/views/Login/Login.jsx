import React, { useState } from "react";
import "./Login.css";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";






const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "350px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  btnPurplee: {
    display: "block",
   width: "300px",
  //  paddingRight: "3rem",
    backgroundColor: "purple",
    textAlign: "center"
  },
 
  fogotlink: {
 color: "purple",
 fontSize:"1rem",
 textAlign: "center",
  }
}));

const LogIn = ({ handleClose }) => {
  const classes = useStyles();

  // create state variables for each input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [light] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    handleClose();
  };

  return (
   
      <div className="Login">
        <h1 className="sign"> Sign In</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="logButton">
            <Button className="A" variant="contained" onClick={handleClose} href="/">
              Cancel
            </Button>
            <Button className={classes.btnPurplee} type="submit" variant="contained" href="/displaySearch">
              sign In
            </Button>
            
            {/* <a href="#" id="Register">Don't have account yet?</a> <br/> */}
          </div>
          <br />
            <Link className={classes.fogotlink} to="/login/reset">Forgot password?</Link> 
            <br />
        </form>
      </div>
    
  );
};

export default LogIn;

// import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router";

// export default class Login extends Component {
//   state = {};

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       email: this.email,
//       password: this.password,
//     };

//     axios
//       .post("login", data)
//       .then((res) => {
//         localStorage.setItem("token", res.data.token);
//         this.setState({
//           loggedIn: true,
//         });
//         this.props.setUser(res.data.user);
//       })
//       .catch((err) => {
//         this.setState({
//           message: err.response.data.message,
//         });
//       });
//   };
//   render() {
//     if (this.state.loggedIn) {
//       return <Redirect to={"/"} />;
//     }

//     let error = "";

//     if (this.state.message) {
//       error = (
//         <div className="alert alert-danger" role="alert">
//           {this.state.message}
//         </div>
//       );
//     }

//     return (
//       <form onSubmit={this.handleSubmit}>
//         {error}
//         <h3>Login</h3>
//         <TextField
//           label="Email"
//           variant="filled"
//           type="email"
//           required
//           //   value={email}
//           onChange={(e) => (this.email = e.target.value)}
//         />

//         <TextField
//           label="Password"
//           variant="filled"
//           type="password"
//           required
//           //   value={email}
//           onChange={(e) => (this.password = e.target.value)}
//         />

//         <div>
//           <Button variant="contained" href="/">
//             Cancel
//           </Button>
//           {/* <Button variant="contained" color="primary" type="submit">
//             Login
//           </Button> */}
//           <Button type="submit" variant="contained" color="primary" href="/searchDAta">
//           Login
//         </Button>
//         </div>

//         <p className="forgot-password text-right">
//           <Link to={"/error"}>Forgot password?</Link>
//         </p>
//       </form>
//     );
//   }
// }
