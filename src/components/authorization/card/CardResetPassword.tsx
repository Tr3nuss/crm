import { FC, useState } from "react";
import { toast } from "react-toastify";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";

export const CardResetPassword: FC = () => {
  interface IFormData {
    password: string;
    confirmPassword: string;
  }

  const [formData, setFormData] = useState<IFormData>({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmPassword) {
      toast.error("Please enter your email");
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
          <br /> функционерах для своих цифровых продуктов, используя
          пользовательский интерфейс, разработанный нами!
        </p>

        <p style={{ fontSize: 14, color: "#fff", paddingTop: "140px" }}>
          Ознакомьтесь с нашими положениями и условиями
        </p>
      </Box>
      <Box
        sx={{
          width: 400,
          height: 460,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "90px 48px",
        }}
      >
        <p style={{ color: "344050", fontSize: 27, fontWeight: 500 }}>
          Сбросить пароль
        </p>
        <TextField
          size="small"
          type="password"
          name="password"
          placeholder="New Password"
          sx={{ width: "100%" }}
          onChange={handleFieldChange}
        />
        <TextField
          type="password"
          name="password"
          size="small"
          placeholder="Confirm Password"
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
            height: 36,
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

export default CardResetPassword;
