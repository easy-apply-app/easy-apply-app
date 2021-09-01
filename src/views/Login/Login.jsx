import React, { useState } from "react";
import "./Login.css";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#2196f3",
    },
  },
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const LogIn = ({ handleClose }) => {
  const classes = useStyles();

  // create state variables for each input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [light, setLight] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    handleClose();
  };

  return (
    
      <div className="Login">
        <h1>Login</h1>
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
          <div>
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
              <CssBaseline />
            </MuiThemeProvider>
            <Button variant="contained" onClick={handleClose} href="/">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" href="/">
              Log In
            </Button>
            <br />
            <Link to="/login/reset">Forgot password?</Link> <br />
          </div>
        </form>
      </div>
  
  );
};

export default LogIn;

