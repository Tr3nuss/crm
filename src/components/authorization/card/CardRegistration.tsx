import { Box, Button, TextField, Checkbox } from "@mui/material";
import { FC } from "react";

const CardRegistration: FC = () => {
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
          С помощью Falcon вы теперь можете сосредоточиться только на
          функционале ваших цифровых продуктов, используя при этом наш
          пользовательский интерфейс!
        </p>

        <Box sx={{ paddingTop: "70px" }}>
          <p style={{ color: "#fff" }}>Уже есть аккаунт?</p>
          <Button
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: 16,
              fontWeight: 500,
              border: "1px solid #fff",
              marginTop: "5px",
              "&:hover": { bgcolor: "#fff", color: "#000" },
            }}
          >
            Авторизоваться
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: 500,
          height: 460,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "48px",
        }}
      >
        <p style={{ fontSize: 28, fontWeight: 500 }}>Регистрация</p>
        <TextField size="small" placeholder="Имя" sx={{ width: "100%" }} />
        <TextField
          size="small"
          placeholder="Email-адрес"
          sx={{ width: "100%" }}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <TextField size="small" placeholder="Пароль" sx={{ width: "50%" }} />
          <TextField
            size="small"
            placeholder="Подтвердить пароль"
            sx={{ width: "50%" }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox />
          <p style={{ fontSize: 13.5, fontWeight: 500 }}>
            Я принимаю условия и политику конфедициальности
          </p>
        </Box>

        <Button
          sx={{
            textTransform: "none",
            bgcolor: "rgb(44, 123, 229)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          Регистрация
        </Button>
      </Box>
    </Box>
  );
};

export default CardRegistration;
