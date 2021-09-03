import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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

const ResetPassword = () => {
  const classes = useStyles();

  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [light] = React.useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(codeSent, confirmed, isConfirming, isConfirming, isSendingCode);
    // handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Code sent"
        variant="filled"
        required
        value={codeSent}
        onChange={(e) => setCodeSent(e.target.value)}
      />
      <TextField
        label="Confirmed "
        variant="filled"
        type="code"
        required
        value={confirmed}
        onChange={(e) => setConfirmed(e.target.value)}
      />
      <TextField
        label="Is Confirming"
        variant="filled"
        //   type="password"
        required
        value={isConfirming}
        onChange={(e) => setIsConfirming(e.target.value)}
      />
      <TextField
        label="Is Sending Code"
        variant="filled"
        //   type="password"
        required
        value={isSendingCode}
        onChange={(e) => setIsSendingCode(e.target.value)}
      />
      {/* <div>{errormessage}</div> */}
      <div>
        <MuiThemeProvider theme={light ? themeLight : themeDark}>
          <CssBaseline />
          {/* <Button onClick={() => setLight(prev => !prev)}>Toggle Theme</Button> */}
        </MuiThemeProvider>
        {/* <Button variant="contained" onClick={handleClose} href="/">
          Cancel
        </Button> */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          href="/login"
        >
          Reset Password
        </Button>
      </div>
    </form>
  );
};
export default ResetPassword;

