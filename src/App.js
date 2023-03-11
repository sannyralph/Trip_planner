import React, {useEffect, useState} from  "react";
import { CssBaseline, Grid } from "@material-ui/core";

import {getPlacesData} from './api'
import Header from "./components/Header/Header";
import List from "./components/Lists/Lists";
import Map from "./components/Maps/Maps";
import Weather from "./components/weather/weather";

function App() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=> {
          setCoordinates({lat: latitude, lng: longitude});
      })
  }, [])

  useEffect(() => {
    setFilteredPlaces((filtered) => places?.filter((place) => Number(place?.rating) > rating));

   
  }, [rating]);
 
  useEffect(() => {
    setIsLoading(true);

    getPlacesData(type, bounds.sw, bounds.ne )
      .then((data) => {
        setFilteredPlaces([])
        setIsLoading(false);
        setPlaces(data);
      })
  }, [type, coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={3}>
          <List 
          places={ filteredPlaces.length ? filteredPlaces : places} 
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          />
        </Grid>
        <Grid map-weather xs={12} md={8}>
          <Grid map xs={10} md={6}>
            <Map 
              setCoordinate={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}
            />
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
