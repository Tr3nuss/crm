import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../../assets/img/favicons/mstile-150x150.png";

export const SimplePasswordReset: FC = () => {
  interface IFormData {
    password: string;
    confirmPassword: string;
  }

  const [formData, setFormData] = useState<IFormData>({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmPassword) {
      toast.error("Пожалуйста введите свой email");
      return;
    }

    try {
      const response = await axios.post("API", {
        password: formData.password,
      });

      if (response.status === 200) {
        toast.success(`Logged in`, {
          theme: "colored",
        });
      } else {
        toast.error("Failed to send reset link");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the reset link");
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
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" width={150} height={150} />
        <p
          style={{
            fontSize: 40,
            fontWeight: 800,
            color: "#2c7be5",
          }}
        >
          falcon
        </p>
      </Box>
      <Box
        sx={{
          width: 450,
          height: 300,
          bgcolor: "#fff",
          padding: "48px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p style={{ fontSize: 19, fontWeight: 500, color: "#344050" }}>
          Сбросить пароль
        </p>
        <TextField
          size="small"
          type="password"
          name="password"
          placeholder="Новый пароль"
          sx={{ width: "100%" }}
          onChange={handleFieldChange}
        />
        <TextField
          size="small"
          type="password"
          name="confirmPassword"
          placeholder="Подтвердить пароль"
          sx={{ width: "100%" }}
          onChange={handleFieldChange}
        />
        <Button
          type="submit"
          sx={{
            bgcolor: "#63ADD0",
            textTransform: "none",
            color: "#fff",
            fontSize: 18,
            fontWeight: 600,
            width: "100%",
            "&:disabled": { opacity: 0.5, color: "#fff" },
          }}
          disabled={formData.password !== formData.confirmPassword}
        >
          Установить пароль
        </Button>
      </Box>
    </form>
  );
};

export default SimplePasswordReset;
