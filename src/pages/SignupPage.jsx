import { Link, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import SectionLayouts from "../components/layouts/SectionLayouts";

const SignUpPage = ({ authGuard }) => {
  return (
    <SectionLayouts>
      <SignUp authGuard={authGuard} />
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Have an account?{" "}
        <Link variant="subtitle2" component={RouterLink} to="/login">
          Login
        </Link>
      </Typography>
    </SectionLayouts>
  );
};

export default SignUpPage;
