import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, Button, TextField, Checkbox } from "@mui/material";
import bgImg from "../../../assets/img/generic/15.jpg";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

export const Registration: FC = () => {
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
            <p>
              Вы уже пользователь? <Link to="/split_login">Логин</Link>
            </p>
          </Box>

          <TextField
            size="small"
            placeholder="Имя"
            sx={{ width: "100%" }}
            name="name"
            type="text"
            onChange={handleFieldChange}
          />
          <TextField
            size="small"
            placeholder="Email-адрес"
            sx={{ width: "100%" }}
            name="email"
            type="email"
            onChange={handleFieldChange}
          />
          <Box sx={{ display: "flex", gap: "10px" }}>
            <TextField
              size="small"
              placeholder="Пароль"
              sx={{ width: "50%" }}
              name="password"
              type="password"
              onChange={handleFieldChange}
            />
            <TextField
              size="small"
              placeholder="Подтвердить пароль"
              sx={{ width: "50%" }}
              type="password"
              name="confirmPassword"
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
              Я принимаю <Link to="*">Условия</Link> и{" "}
              <Link to="*">Политику конфедициальности</Link>
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
      </Box>
    </form>
  );
};

export default Registration;
