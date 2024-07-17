import { FC } from "react";
import { Box, Button } from "@mui/material";
import logo from "../../../assets/img/favicons/mstile-150x150.png";
import envelope from "../../../assets/img/icons/spot-illustrations/16.png";

const SimpleConfirmMail: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="" width={150} height={150} />
        <p style={{ fontSize: 40, color: "#2c7be5", fontWeight: 800 }}>
          falcon
        </p>
      </Box>

      <Box
        sx={{
          width: 450,
          height: 400,
          padding: "48px",
          bgcolor: "#fff",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          borderRadius: "5px",
        }}
      >
        <img src={envelope} alt="envelope" width={100} height={93} />
        <p
          style={{
            color: "rgb(52, 64, 80)",
            fontSize: 23,
            fontWeight: 500,
            paddingTop: "20px",
          }}
        >
          Please check your email!
        </p>
        <p
          style={{ color: "rgb(94, 110, 130)", fontSize: 16, fontWeight: 400 }}
        >
          An email has been sent to xyz@abc.com
          <br /> Please click on the included link to reset your password.
        </p>

        <Button
          sx={{
            textTransform: "none",
            width: 150,
            height: 30,
            bgcolor: "rgb(38, 107, 198)",
            fontSize: 14,
            fontWeight: 500,
            color: "#fff",
            marginTop: "20px",
          }}
        >
          Return to login
        </Button>
      </Box>
    </Box>
  );
};

export default SimpleConfirmMail;