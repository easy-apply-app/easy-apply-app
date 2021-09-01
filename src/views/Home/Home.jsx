import React from "react";
import "./Home.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import logo from "./logo.jpeg";

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

const Home = () => {
  const [open, setOpen] = useState(false);
  const [light, setLight] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Home">
      <div>
        <h1>Eazy-Apply</h1>
      </div>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          href={"/login"}
        >
          Login
        </Button>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          href={"/register"}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Home;
