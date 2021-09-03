import React, { useState, useEffect } from "react";

import app from "../../component/Api/app";
import cms from "../../component/Api/cms";
import DisplaySearch from "../../component/searchDAta/displayDAta";

import { makeStyles } from "@material-ui/core";
import { Grid,TextField} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles((theme) => ({
  mainH: {
    textAlign: "center",
    color: "black",
    fontWteight: "bold",
    paddingTop:" 5.5rem",
    fontSize: "2.9rem",
    fontWeight: "bold",
  },
  search: {
    textAlign: "center",

  }
  
}));

function DataSearch() {
  const classes = useStyles();

  const [institutions, setInstitutions] = useState([]);
  const [thisquery,setQuery] = useState("")
  const checkAndSync = async () => {
    
    if (app.checkIfCanSync()) {
      const response = await cms.getAllInstitutions();
      console.log(response)
      setInstitutions(response);
      
      return;

    }
   
    const responseString = window.localStorage.getItem("institutions") 
    
    const response = responseString ? JSON.parse(responseString): []
    console.log(response)
    setInstitutions(response);
  };
  useEffect(() => checkAndSync(), []);


 


  function searchRow(rows){
    return rows.filter(
      (row) => 
      row.name.toLowerCase().indexOf(thisquery) > -1 ||
      row.province.toLowerCase().indexOf(thisquery) > -1
      )
  }

  return (
    <div>
      <Grid tyle={{marginTop:"1.2rem"}} spacing={2} >
        
        <h1 className={classes.mainH}>EAZY APPLY</h1>

        <div className={classes.search} container style={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={institutions.map((api) => api.name)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                margin="normal"
                variant="outlined"
                value={thisquery}
                onChange={(e) => setQuery(e.target.value)}
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </div>
        <Grid>
                <DisplaySearch data={searchRow(institutions)} />
        </Grid>
      </Grid>
    </div>
  );
}
export default DataSearch;