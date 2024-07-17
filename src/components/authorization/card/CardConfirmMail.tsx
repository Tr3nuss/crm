import { Box, Button } from "@mui/material";
import envelope from "../../../assets/img/icons/spot-illustrations/16.png";
import { FC } from "react";

export const CardConfirmMail: FC = () => {
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
          padding: "48px",
          bgcolor: "#fff",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
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
          Пожалуйста, проверьте свою почту!
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
          Вернуться к авторизации
        </Button>
      </Box>
    </Box>
  );
};

export default CardConfirmMail;
