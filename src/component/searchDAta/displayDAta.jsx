import React, { useState, useEffect } from "react";

import cms from "../Api/cms";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Paper } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "350px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  names: {
    color: "black",

  }
  
}));

function DisplaySearch() {
  const classes = useStyles();

  const [institutions, setInstitutions] = useState([]);

  const checkAndSync = async () => {
   
    // if (app.checkIfCanSync()) {
      const response = await cms.getAllInstitutions();
      setInstitutions(response);
      return;
    // }
    // const responseString = window.localStorage.getItem("institutions") 
    // const response = responseString ? JSON.parse(responseString): []
    // setInstitutions(response);
  };
  useEffect(() => checkAndSync(), []);

  return (
    <div className={classes.root}>
      {institutions.map(({  name,website, photo }) => (
         
        <Grid item style={{ padding: "0.8rem" }}>
          <Paper variant="outlined">
            <Grid style={{ display: "flex" }}>
              <Grid>
                <img
                  src={photo && photo.url}
                  style={{ width: "300px", marginRight: "40px" }}
                  alt=""
                ></img>
              </Grid>
              <Grid>
                <Typography variant="h5">
                  <h2 className={classes.names}>{name}</h2>
                </Typography>
                <a href={website} rel="noreferrer" target="_blank" >{website}</a>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </div>
  );
}
export default DisplaySearch;

  // const navigateTo = () => history.push("/componentURL");
  // const goToDetails = (id) => {
    // history.push(`/componentURL/${id}`);
  // };
