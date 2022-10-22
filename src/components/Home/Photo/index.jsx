import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../../../redux/images/ImageSlice";
import PhotoCard from "./PhotoCard";

export default function Photo() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("cat");
  
  useEffect(() => {
    const getPhotos = async () => {
      const config = {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY,
        },
      };
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}query=${query}`,
          config
        );
        console.log(response.data.photos);
        const allPhotos = response.data;
        dispatch(addImage(allPhotos));
      } catch (error) {
        console.log(error);
      }
    };
    getPhotos();
  }, []);

  return (
    <Box sx={{my: 5}}>
      <Typography align="center" variant="h4">Yes I am Cat!!</Typography>
      <PhotoCard/>
    </Box>
  );
}
