import { FC } from "react";
import { Box, TextField, Button } from "@mui/material";
import logo from "../../../assets/img/favicons/mstile-150x150.png";

export const SimplePasswordReset: FC = () => (
  <Box
    sx={{
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" width={150} height={150} />
      <p
        style={{
          fontSize: 40,
          fontWeight: 800,
          color: "#2c7be5",
        }}
      >
        falcon
      </p>
    </Box>
    <Box
      sx={{
        width: 450,
        height: 300,
        bgcolor: "#fff",
        padding: "48px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <p style={{ fontSize: 19, fontWeight: 500, color: "#344050" }}>
        Reset new password
      </p>
      <TextField
        size="small"
        placeholder="New Password"
        sx={{ width: "100%" }}
      />
      <TextField
        size="small"
        placeholder="Confirm Password"
        sx={{ width: "100%" }}
      />
      <Button
        sx={{
          bgcolor: "#63ADD0",
          textTransform: "none",
          color: "#fff",
          fontSize: 18,
          fontWeight: 600,
          width: "100%",
        }}
      >
        Set password
      </Button>
    </Box>
  </Box>
);

export default SimplePasswordReset;
