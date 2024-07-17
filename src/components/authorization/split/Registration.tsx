import { FC } from "react";
import { Box, Button, TextField, Checkbox } from "@mui/material";
import bgImg from "../../../assets/img/generic/15.jpg";

export const Registration: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 35,
      }}
    >
      <img src={bgImg} alt="" style={{ height: 1080, width: "50%" }} />
      <Box
        sx={{
          width: 500,
          height: 500,
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: 500,
            height: 70,
            background: "#408BD3",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 32, fontWeight: 800, color: "#fff" }}>falcon</p>
        </Box>
        <Box
          sx={{
            padding: "29px",
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: 28, fontWeight: 500 }}>Регистрация</p>
            <p>Уже пользователь? Логин</p>
          </Box>

          <TextField size="small" placeholder="Имя" sx={{ width: "100%" }} />
          <TextField
            size="small"
            placeholder="Email-адрес"
            sx={{ width: "100%" }}
          />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              size="small"
              placeholder="Пароль"
              sx={{ width: "50%" }}
            />
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
    </Box>
  );
};

export default Registration;
