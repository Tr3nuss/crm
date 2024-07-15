import { FC } from "react";
import { Box, Button } from "@mui/material";
import logoutImg from "../../../assets/img/icons/spot-illustrations/45.png";

export const CardLogout: FC = () => {
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
          alignItems: "center",
          flexDirection: "column",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <img src={logoutImg} alt="logoutImg" height={93} width={100} />
        <p style={{ fontSize: 28, fontWeight: 500, paddingTop: "25px" }}>
          See you again!
        </p>
        <p
          style={{
            color: "rgb(94, 110, 130)",
            fontSize: 16,
            fontWeight: 400,
            paddingTop: "10px",
          }}
        >
          Thanks for using Falcon. You are
          <br />
          now succesfully signed out
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
            marginTop: "30px",
          }}
        >
          Return to login
        </Button>
      </Box>
    </Box>
  );
};

export default CardLogout;
