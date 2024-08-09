import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import bgImg from "../../../assets/img/generic/20.jpg";
import axios from "axios";

export const PasswordReset: FC = () => {
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
      toast.error("Пожалуйста, введите ваш email");
      return;
    }

    try {
      const response = await axios.post("API", {
        password: formData.password,
      });

      if (response.status === 200) {
        toast.success(`Вы вошли в систему`, {
          theme: "colored",
        });
      } else {
        toast.error("Не удалось отправить ссылку для восстановления");
      }
    } catch (error) {
      console.error(error);
      toast.error("При отправке ссылки для сброса произошла ошибка");
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
          width: 480,
          height: 400,
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: 480,
            height: 70,
            background: "#408BD3",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <p style={{ color: "344050", fontSize: 27, fontWeight: 500 }}>
            Сбросить пароль
          </p>
          <TextField
            name="password"
            size="small"
            placeholder="New Password"
            sx={{ width: "100%" }}
            onChange={handleFieldChange}
          />
          <TextField
            name="confirmPassword"
            size="small"
            placeholder="Confirm Password"
            sx={{ width: "100%" }}
            onChange={handleFieldChange}
          />
          <Button
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
            type="submit"
            disabled={formData.password !== formData.confirmPassword}
          >
            Установить пароль
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default PasswordReset;
