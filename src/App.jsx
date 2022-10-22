import { CssBaseline } from "@mui/material";
import { Fragment, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();

  return (
    <Fragment>
      <CssBaseline />
      <Routes>
        <Route path="/signup" element={<SignUpPage authGuard={setAuth} />} />
        <Route path="/login" element={<LoginPage authGuard={setAuth} />} />
        <Route
          path="/"
          element={
            auth ? (
              <HomePage authGuard={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
