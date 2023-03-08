import React from "react";
import GoogleMap from 'google-map-react';
import {Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon  from "@material-ui/icons/LocationOnOutlined";
import rating from '@material-ui/lab';

import useStyles from "./styles";

const Map = ({setCoordinate, setBounds, coordinates}) => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

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
                onChange={(e) => {
                    setCoordinate({lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne,  sw: e.marginBounds.sw});
                }}
                onChildClick={''}
          >

          </GoogleMap>
       </div>
    )
}

export default Map;