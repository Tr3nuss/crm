import { FC } from "react";
import { Box, Button, TextField, Checkbox } from "@mui/material";

export const CardLogin: FC = () => {
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
          width: 350,
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
          С помощью Falcon
          <br /> вы теперь можете сосредоточиться
          <br /> только на функционале
          <br /> ваших цифровых продуктов,
          <br /> используя при этом
          <br /> наш пользовательский интерфейс!
        </p>

        <p style={{ fontSize: 16, color: "#fff", paddingTop: "35px" }}>
          Нет аккаунта?
          <br /> Начать!
        </p>

        <p style={{ fontSize: 14, color: "#fff", paddingTop: "50px" }}>
          Ознакомьтесь с нашими положениями и условиями
        </p>
      </Box>
      <Box
        sx={{
          width: 500,
          height: 460,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "90px 48px",
        }}
      >
        <p style={{ fontSize: 28, fontWeight: 500 }}>Вход в учетную запись</p>
        <TextField
          size="small"
          placeholder="Email адрес"
          style={{ paddingTop: "20px" }}
        />
        <TextField
          size="small"
          placeholder="Пароль"
          sx={{ paddingTop: "30px" }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "15px",
          }}
        >
          <Checkbox
            sx={{ appearance: "none", border: "none", outline: "none" }}
          />{" "}
          <p
            style={{
              paddingRight: "140px",
              color: "rgb(94, 110, 130)",
              fontSize: 13.5,
              fontWeight: 500,
            }}
          >
            Запомнить меня
          </p>
          <p
            style={{
              color: "rgb(44, 123, 229)",
              fontWeight: 500,
              fontSize: 13.5,
            }}
          >
            Забыли пароль?
          </p>
        </Box>
        <Button
          sx={{
            textTransform: "none",
            bgcolor: "rgb(44, 123, 229)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            marginTop: "15px",
          }}
        >
          Авторизоваться
        </Button>
      </Box>
    </Box>
  );
};

export default CardLogin;
