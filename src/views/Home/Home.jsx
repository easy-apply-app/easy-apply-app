import React from "react";
import "./Home.css";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import logo from "./logo.jpeg";

// const themeLight = createMuiTheme({
//   palette: {
//     background: {
//       default: "#2196f3"
//     }
//   }
// });

// const themeDark = createMuiTheme({
//   palette: {
//     background: {
//       default: "#222222"
//     },
//     text: {
//       primary: "#ffffff"
//     }
//   }
// });

const useStyles = makeStyles((theme) => ({
  

  homeBtn: {
    display: "block",
    width: "300px",
    margin: "5px auto",
    backgroundColor: "white",
    color: "black"
    
  },
  hmbtn: {

    display: "block",
    width: "300px",
    margin: "5px auto",
    backgroundColor: "purple",
    border: "2px white solid",
    

      }
  
}))


const Home = () => {
  const classes = useStyles();

  // const [open, setOpen] = useState(false);
  // const [light] = React.useState(true);

  
  const handleOpen = () => {
    // setOpen(true);
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  

  return (
   
    
    <div className="Home">
      <h3 className="Stater" > 
      Eazy Apply
     </h3>
     <img src={logo} alt="Logo" />
    <div className="buttonFlex">
      <Button className={classes.hmbtn} variant="contained"  href="/LogIn" onClick={handleOpen}>
        LogIn
      </Button>
      <Button className={classes.homeBtn} variant="contained"  href="/Register" onClick={handleOpen}>
        Register
      </Button>
    
    </div>
    </div>
    
  );
};

export default Home

