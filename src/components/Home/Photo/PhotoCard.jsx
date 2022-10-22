import { createTheme, useMediaQuery } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";

export default function PhotoCard() {
  const imageData = useSelector((state) => {
    let allImages = state.images.images;
    return allImages
  });
  const theme = createTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
        <ImageList variant="masonry" cols={matchDownMd ? 2 : 3} gap={8}>
          {imageData.photos?.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.src.original}?w=248&fit=crop&auto=format`}
                srcSet={`${item.src.original}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.alt}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
    </Container>
  );
}
