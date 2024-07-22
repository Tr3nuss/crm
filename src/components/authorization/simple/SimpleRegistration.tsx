import { Box, Checkbox, TextField, Button } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import logo from "../../../assets/img/favicons/mstile-150x150.png";
import axios from "axios";
import { Link } from "react-router-dom";

export const SimpleRegistration: FC = () => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      formData.password !== formData.confirmPassword
    ) {
      toast.error("Пожалуйста проверьте введенные данные");
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

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
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
            <p style={{ fontSize: 13 }}>
              Уже есть аккаунт? <Link to="simple_login">Авторизуйтесь</Link>
            </p>
          </Box>

          <TextField
            size="small"
            placeholder="Имя"
            name="name"
            type="text"
            onChange={handleFieldChange}
            sx={{ width: "100%" }}
          />
          <TextField
            size="small"
            placeholder="Email-адрес"
            name="email"
            type="email"
            onChange={handleFieldChange}
            sx={{ width: "100%" }}
          />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              size="small"
              placeholder="Пароль"
              name="password"
              type="password"
              onChange={handleFieldChange}
              sx={{ width: "50%" }}
            />
            <TextField
              size="small"
              placeholder="Подтвердить пароль"
              name="confirmPassword"
              type="password"
              onChange={handleFieldChange}
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
            <Checkbox
              name="isAccepted"
              onChange={(e) =>
                setFormData({ ...formData, isAccepted: e.target.checked })
              }
            />
            <p style={{ fontSize: 13.5, fontWeight: 500 }}>
              Я принимаю условия и политику конфедициальности
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
              "&:disabled": { opacity: "0.5", color: "#fff" },
            }}
            disabled={
              !formData.name ||
              !formData.email ||
              !formData.password ||
              formData.confirmPassword !== formData.password ||
              !formData.isAccepted
            }
          >
            Регистрация
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default SimpleRegistration;
