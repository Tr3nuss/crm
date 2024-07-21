import { Box, Button, TextField, Checkbox } from "@mui/material";
import { toast } from "react-toastify";
import { FC, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import routePath from "../../../routes/routePath";

const CardRegistration: FC = () => {
  interface IFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAccepted: boolean;
  }

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      toast.error("Please check the entered data");
      return;
    }

    try {
      const response = await axios.post("API", {
        name: formData.name,
        email: formData.email,
        passowrd: formData.password,
      });

      if (response.status === 200) {
        toast.success(`Успешно зарегистрировано на ${formData.name}`);
      } else {
        toast.error(
          "Не удалось зарегистрироваться. Пожалуйста, проверьте входные данные"
        );
      }
    } catch (e) {
      console.error(e);
      toast.error("Ошибка регистрации");
    }
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
            as={Link}
            to={routePath.cardLogin}
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: 16,
              fontWeight: 500,
              border: "1px solid #fff",
              marginTop: "5px",
              "&:hover": { bgcolor: "#fff", color: "#000" },
              textDecoration: "none",
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
        <TextField
          size="small"
          placeholder="Имя"
          sx={{ width: "100%" }}
          type="text"
          onChange={handleFieldChange}
        />
        <TextField
          size="small"
          placeholder="Email-адрес"
          sx={{ width: "100%" }}
          type="email"
          onChange={handleFieldChange}
        />
        <Box sx={{ display: "flex", gap: "10px" }}>
          <TextField
            size="small"
            placeholder="Пароль"
            sx={{ width: "50%" }}
            type="password"
            onChange={handleFieldChange}
          />
          <TextField
            size="small"
            placeholder="Подтвердить пароль"
            sx={{ width: "50%" }}
            type="password"
            onChange={handleFieldChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Checkbox
            onChange={(e) =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked,
              })
            }
          />
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
            "&:disabled": { opacity: 0.5, color: "#fff" },
          }}
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.password ||
            formData.confirmPassword !== formData.password ||
            !formData.isAccepted
          }
          type="submit"
        >
          Регистрация
        </Button>
      </Box>
    </form>
  );
};

export default CardRegistration;
