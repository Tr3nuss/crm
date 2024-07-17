import { FC } from "react";
import { Box, TextField, Button } from "@mui/material";

export const CardResetPassword: FC = () => {
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
          Ознакомьтесь с нашими положениями и условиями
        </p>
      </Box>
      <Box
        sx={{
          width: 400,
          height: 460,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "90px 48px",
        }}
      >
        <p style={{ color: "344050", fontSize: 27, fontWeight: 500 }}>
          Сбросить пароль
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
            height: 36,
          }}
        >
          Установить пароль
        </Button>
      </Box>
    </Box>
  );
};

export default CardResetPassword;
