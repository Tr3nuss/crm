import { FC, useState } from "react";
import { Box, Button, TextField, Checkbox } from "@mui/material";
import bgImg from "../../../assets/img/generic/15.jpg";
import { toast } from "react-toastify";

export const Registration: FC = () => {
  interface IFormData {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
    isAccepted: boolean;
  }

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    isAccepted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully registered as ${formData.name}`, {
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
              formData.confirmpassword !== formData.password ||
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
