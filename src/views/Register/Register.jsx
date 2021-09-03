import React, { useState } from 'react';
import "./Register.css";
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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


const useStyles = makeStyles(theme => ({
  root: {
    
    paddingTop: "32px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '350px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  h1Class:{
    
    textAlign: "center",
    paddingTop: "4rem",
    fontWeight: "bold",
    color: "black",
  },
  btnPurplee: {
    display: "block",
   width: "300px",
   paddingRight: "3rem",
    backgroundColor: "white",
    textAlign: "center",
    border: "2px purple solid",
  },
  btnPurplee1: {
    display: "block",
   width: "300px",
   paddingRight: "3rem",
    backgroundColor: "purple",
    textAlign: "center"
  },
}));

const Register = ({ handleClose }) => {
  const classes = useStyles();

  // create state variables for each input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // const [ setLight] = React.useState(true);
  // const [errormessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, email, password, confirmPassword, age, gender,);
    handleClose();
  };

  return (

    <div className="Register">
     
    <form className={classes.root} onSubmit={handleSubmit}>
    <h1 className={classes.h1Class}>
     New Account
     </h1>
      <TextField
        label="User Name"
        variant="filled"
        required
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        label="Email "
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
       <TextField
        label="Confirm Password"
        variant="filled"
        type="password"
        required
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <TextField
        label="Age"
        variant="filled"
        required
        value={age}
        onChange={e => setAge(e.target.value)}
      />
      <TextField
        label="Gender"
        variant="filled"
        required
        value={gender}
        onChange={e => setGender(e.target.value)}
      />
      {/* <div>{errormessage}</div> */}
      <div>
    
        <Button className={classes.btnPurplee} variant="contained" onClick={handleClose} href="/">
          Cancel
        </Button>
        <Button className={classes.btnPurplee1} type="submit" variant="contained" color="primary" href="/login">
          Register
        </Button>
      </div>
    </form>
    </div>
    
  );
};

export default Register;



