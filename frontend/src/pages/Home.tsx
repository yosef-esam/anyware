import { Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { login, logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogin = () => {
    dispatch(login());
    navigate("/dashboard");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Container sx={{ textAlign: "center", marginTop: 8 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Student Dashboard
      </Typography>

      {!isAuthenticated ? (
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
      ) : (
        <Button variant="outlined" color="secondary" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Container>
  );
}

export default Home;
