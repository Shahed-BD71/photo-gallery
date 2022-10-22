import { Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Login from "../components/auth/Login";
import SectionLayouts from "../components/layouts/SectionLayouts";


const LoginPage = ({ authGuard }) => {
  return (
    <SectionLayouts>
      <Login authGuard={authGuard} />
      <Typography
        variant="body2"
        align="center"
        sx={{ mt: 3 }}
      >
        Don't have an account?{" "}
        <Link variant="subtitle2" component={RouterLink} to="/signup">
        Sign Up
        </Link>
      </Typography>
    </SectionLayouts>
  );
};

export default LoginPage;
