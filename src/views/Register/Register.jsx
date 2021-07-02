// import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import axios from "axios";

// export default class Register extends Component {
//   state = {};

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       first_name: this.firstName,
//       last_name: this.lastName,
//       email: this.email,
//       password: this.password,
//       password_confirm: this.confirmPassword,
//     };

//     axios
//       .post("http://localhost:8000/register", data)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         this.setState({
//           message: err.response.data.message,
//         });
//       });
//   };

//   render() {
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

//         <h3>Sign up</h3>

//         <TextField
//           label="First Name"
//           variant="outlined"
//           type="text"
//           required
//           //   value={email}
//           onChange={(e) => (this.first_name = e.target.value)}
//         />

//         <TextField
//           label="Last Name"
//           variant="outlined"
//           type="text"
//           required
//           //   value={email}
//           onChange={(e) => (this.last_name = e.target.value)}
//         />

//         <TextField
//           label="Age"
//           variant="outlined"
//           type="number"
//           required
//           //   value={email}
//           onChange={(e) => (this.age = e.target.value)}
//         />

//         <TextField
//           label="Gender"
//           variant="outlined"
//           type="text"
//           required
//           //   value={email}
//           onChange={(e) => (this.gender = e.target.value)}
//         />

//         <TextField
//           label="Email"
//           variant="outlined"
//           type="email"
//           required
//           //   value={email}
//           onChange={(e) => (this.email = e.target.value)}
//         />

//         <TextField
//           label="Password"
//           variant="outlined"
//           type="Password"
//           required
//           //   value={email}
//           onChange={(e) => (this.password = e.target.value)}
//         />

//         <TextField
//           label="Confirm Password"
//           variant="outlined"
//           type="confirm password"
//           required
//           //   value={email}
//           onChange={(e) => (this.confirm_password = e.target.value)}
//         />
//         <div>
//           <Button variant="contained" href="/">
//           Cancel
//         </Button>
//         <Button type="submit" variant="contained" color="primary" href="/login">
//           Sign up
//         </Button>
//         </div>

        
//       </form>
//     );
//   }
// }



import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
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
  const [light, setLight] = React.useState(true);
  // const [errormessage, setErrorMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username, email, password, confirmPassword, age, gender,);
    handleClose();
  };

  // const AddUser = () => {
  //   if (username.length < 5) return "The username entered is too short";

  //   if (password.length < 4) return "The password entered is too short";

  //   if (confirmPassword !== password) return "The password does not match";

  //   if (age === "") return "Please enter your age";

  //   if (gender === "") return "Please enter your gender";
//store to the local storage
    // if (!userString) {
    //   window.localStorage.setItem(
    //     "use",
    //     JSON.stringify([{ username, password }])
    //   );
    //   return null;
    // }

    // const userData = JSON.parse(useString);
    // if (userData.find((user) => user.username === usernane))
    //   return "user already exists";

  //   window.localStorage.setItem(
  //     "use",
  //     JSON.stringify([...userData, { username, password }])
  //   );
  // };

  // function handleChange(e) {
  //   setUsername(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const response = AddUser();
  //   if (response) setErrorMessage(response);
  // }


  return (
    <form className={classes.root} onSubmit={handleSubmit}>
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
      <MuiThemeProvider theme={light ? themeLight : themeDark}>
      <CssBaseline />
      {/* <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button> */}
    </MuiThemeProvider>
        <Button variant="contained" onClick={handleClose} href="/">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" href="/login">
          Register
        </Button>
      </div>
    </form>
  );
};

export default Register;