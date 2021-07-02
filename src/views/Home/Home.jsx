// import React, {Component} from 'react';

// export default class Home extends Component {
//     state = {};


//     render() {

//         if(this.props.user){
//             return (
//             <h2>Hi {this.props.user.first_name} {this.props.user.last_name}</h2>
//             )
//         }
//         return (
//             <h2>Welcome to Easy-Apply-App</h2>
            
//         )
//     }

// }


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
      default: "#2196f3"
    }
  }
});

const themeDark = createMuiTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
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
      <h1>
      Welcome to Easy-Apply-App
     </h1>

     <img src={logo} alt="Logo" />

     <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      {/* <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button> */}
    </MuiThemeProvider>
      <Button variant="contained" href="/LogIn" onClick={handleOpen}>
        LogIn
      </Button>

      <Button variant="contained" href="/Register" onClick={handleOpen}>
        Register
      </Button>
      {/* <ModalDialog open={open} handleClose={handleClose} /> */}
    </div>
  );
};

export default Home