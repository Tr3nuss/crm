import { Box, Button, TextField, Checkbox } from "@mui/material";
import { toast } from "react-toastify";
import { FC, useState } from "react";

const CardRegistration: FC = () => {
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
    </form>
  );
};

export default CardRegistration;
