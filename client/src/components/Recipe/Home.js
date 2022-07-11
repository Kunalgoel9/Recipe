import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "grid", placeItems: "center", margin: "5em auto" }}>
      <h2>Welcome to Recipe App</h2>

      <p>Please Login or register to Continue</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "2em",
        }}
      >
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
        <Button variant="contained" onClick={() => navigate("/register")}>
          Register
        </Button>
      </div>
    </div>
  );
}

export default Home;
