import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

export const CardForgotPassword: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 460,
          background: "#2c7be5",
          textAlign: "center",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <p
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#fff",
            paddingTop: "40px",
          }}
        >
          falcon
        </p>
        <p style={{ fontSize: 16, color: "#fff", paddingTop: "35px" }}>
          With the power of Falcon,
          <br /> you can now focus only on
          <br /> functionaries for your digital
          <br /> products while living the UI
          <br /> desing of us!{" "}
        </p>

        <p style={{ fontSize: 14, color: "#fff", paddingTop: "140px" }}>
          Read our terms and conditions
        </p>
      </Box>
      <Box
        sx={{
          width: 450,
          height: 460,
          padding: "90px 48px",
          bgcolor: "#fff",

          display: "flex",
          flexDirection: "column",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <p style={{ fontSize: 23, fontWeight: 500 }}>Forgot your password?</p>
        <p
          style={{
            color: "rgb(94, 110, 130)",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "Open Sans",
          }}
        >
          Enter your email and we'll send you a reset link
        </p>
        <TextField
          size="small"
          sx={{ width: "100%", paddingTop: "32px" }}
          placeholder="Email address..."
        />
        <Button
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
            bgcolor: "rgb(44, 123, 229)",
            width: "100%",
            marginTop: "20px",
          }}
        >
          Send reset link
        </Button>
        <p
          style={{
            color: "rgb(116, 129, 148)",
            fontSize: 13.333,
            fontWeight: 400,
            paddingTop: "20px",
          }}
        >
          I can't recover my account using this page
        </p>
      </Box>
    </Box>
  );
};
