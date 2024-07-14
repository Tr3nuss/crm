import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";
import bgImg from "../../../assets/img/generic/17.jpg";

const ForgetPassword: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 35,
      }}
    >
      <img src={bgImg} alt="" style={{ height: 1080, width: "50%" }} />
      <Box>
        <Box
          sx={{
            width: 480,
            height: 70,
            background: "#408BD3",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 32, fontWeight: 800, color: "#fff" }}>falcon</p>
        </Box>
        <Box
          sx={{
            width: 480,
            height: 300,
            padding: "48px",
            bgcolor: "#fff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
            borderRadius: "5px",
          }}
        >
          <p style={{ fontSize: 19, fontWeight: 500 }}>Forgot your password?</p>
          <p
            style={{
              color: "rgb(94, 110, 130)",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            Enter your email and we'll send you a reset link
          </p>
          <TextField
            size="small"
            sx={{ width: "100%", paddingTop: "25px" }}
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
              marginTop: "10px",
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
    </Box>
  );
};

export default ForgetPassword;
