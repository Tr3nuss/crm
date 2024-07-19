import { FC, useState } from "react";
import { Box, Button, TextField, Checkbox } from "@mui/material";
import { toast } from "react-toastify";

export const CardLogin: FC = () => {
  interface IFormData {
    email: string;
    password: string;
    remember: boolean;
  }

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
    remember: false,
  });

  // Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Logged in as ${formData.email}`, {
      theme: "colored",
    });
  };

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
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
          onChange={handleFieldChange}
        />
        <TextField
          size="small"
          placeholder="Пароль"
          sx={{ paddingTop: "30px" }}
          onChange={handleFieldChange}
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
            name="remember"
            onChange={(e) =>
              setFormData({
                ...formData,
                remember: e.target.checked,
              })
            }
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
          type="submit"
          sx={{
            textTransform: "none",
            bgcolor: "rgb(44, 123, 229)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            marginTop: "15px",
            "&:disabled": { opacity: 0.5, color: "#fff" },
          }}
          disabled={!formData.password || !formData.email || !formData.remember}
        >
          Авторизоваться
        </Button>
      </Box>
    </form>
  );
};

export default CardLogin;
