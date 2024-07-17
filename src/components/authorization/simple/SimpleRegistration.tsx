import { Box, Checkbox, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../../assets/img/favicons/mstile-150x150.png";

export const SimpleRegistration = () => {
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
          width: 475,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={logo} alt="" width={150} height={150} />
          <p style={{ fontSize: 40, color: "#2c7be5", fontWeight: 800 }}>
            falcon
          </p>
        </Box>
        <Box
          sx={{
            width: 450,
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            background: "#fff",
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
            <p style={{ fontSize: 19, fontWeight: 500 }}>Регистрация</p>
            <p style={{ fontSize: 13 }}>Уже есть аккаунт? Логин</p>
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
              justifyContent: "space-between",
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

export default SimpleRegistration;
