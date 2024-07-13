import React from "react";
import { Box, TextField, Checkbox, Button } from "@mui/material";
// import { useAppContext } from "providers/AppProvider";

const Example: React.FC = () => {
  // const {
  //   config: { openAuthModal },
  //   setConfig,
  // } = useAppContext();

  // const handleClose = () => {
  //   setConfig("openAuthModal", false);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Добавляем высоту, чтобы центрировать по вертикали на всю высоту экрана
      }}
    >
      <Box sx={{ width: 500 }}>
        <Box>
          <Box sx={{ padding: "29px" }}>
            <h2>Register</h2>
            <p>Please create your free Falcon Account</p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "25px",
            flexDirection: "column",
            padding: "29px",
          }}
        >
          <TextField size="small" sx={{ width: 440 }} label="Name" />
          <TextField size="small" sx={{ width: 440 }} label="Email Address" />
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField size="small" sx={{ width: 210 }} label="Password" />
            <TextField
              size="small"
              sx={{ width: 210 }}
              label="Confirm Password"
            />
          </Box>
          <Box>
            <Checkbox /> I accept the <a href="#">Terms</a> and{" "}
            <a href="#">Privacy policy</a>
          </Box>
          <Button
            sx={{ textTransform: "none", background: "#2c7be5", color: "#fff" }}
          >
            Register
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div style={{ width: 155, height: 1, background: "#000" }}></div>
            <p>or register with</p>
            <div style={{ width: 155, height: 1, background: "#000" }}></div>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <Button sx={{ textTransform: "none" }}>Google</Button>
            <Button sx={{ textTransform: "none" }}>Facebook</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Example;
