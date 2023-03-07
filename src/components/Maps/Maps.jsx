import React from "react";
import GoogleMap from 'google-map-react';
// import {Paper, Typography, useMediaQuery } from '@material-ui/core';
// import LocationOnOutlinedIcon  from "@material-ui/icons/LocationOnOutlined";
// import rating from '@material-ui/lab';

import useStyles from "./styles";

const Map = () => {

    const classes = useStyles();
    // const isMobile = useMediaQuery('(min-width:600px)');

    // const coordinates = {lat: 0, lng: 0};

    const defaultProps = {
        center: {
          lat: 0,
          lng: 0,
        },
        zoom: 10,
      };
   
    return  (
       <div className={classes.mapContainer}>
          <GoogleMap 
                className={classes.mapZoom}
                bootstrapURLKeys={{key: 'AIzaSyDBHZjDDfvsulNaKCZr2-jDZKSDtpAEgqQ'}}
                defaultCenter={defaultProps.center}
                center={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
          >

          </GoogleMap>
       </div>
    )
}

export default Map;