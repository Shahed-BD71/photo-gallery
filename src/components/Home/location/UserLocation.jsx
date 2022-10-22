import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const UserLocation = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    try {
      if (!geolocationAPI) {
        setError("Geolocation API is not available in your browser!");
      } else {
        geolocationAPI.getCurrentPosition((position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        });
      }
    } catch (error) {
      setError("Something went wrong getting your position!");
    }
  };
  useEffect(() => {
    getUserCoordinates();
  }, []);

  return (
    <Box sx={{ my: 5 }} component="div">
      <Typography align="center" variant="h6">
        Your coordinates are: {[lat, long]}
      </Typography>
    </Box>
  );
};

export default UserLocation;
