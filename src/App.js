import React, {useEffect, useState} from  "react";
import { CssBaseline, Grid } from "@material-ui/core";

import {getPlacesData} from './api'
import Header from "./components/Header/Header";
import List from "./components/Lists/Lists";
import Map from "./components/Maps/Maps";
import Weather from "./components/weather/weather";

function App() {

  const [places, setPlaces] = useState([]);
 
  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data)
        setPlaces(data);
      })
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid map-weather xs={12} md={8}>
          <Grid map xs={10} md={6}>
            <Map />
          </Grid>
            <Grid map xs={12}>
              <Weather />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
