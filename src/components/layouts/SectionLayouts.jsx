import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

export default function SectionLayouts({ children }) {
  return (
    <Fragment>
      <RootStyle>
        <Container maxWidth="sm">
          <ContentStyle>
            <HeadingStyle>
              <Typography variant="h4" sx={{ color: "secondary.main" }}>
                Cat Gallery
              </Typography>
              <Typography sx={{ mb: 5 }}>
                Login Here
              </Typography>
            </HeadingStyle>
            {children}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Fragment>
  );
}
