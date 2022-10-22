import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Logo from "../../assets/logo.png.png";

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
              <img src={Logo} alt='logo'/>
              <Typography sx={{ color: "text.secondary", mb: 5 }}>
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
