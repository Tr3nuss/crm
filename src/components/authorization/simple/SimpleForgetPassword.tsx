import { FC, useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";

export const SimpleForgetPassword: FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Пожалуйста введите ваш email");
      return;
    }

    try {
      const response = await axios.post("API", { email: email });

      if (response.status === 200) {
        toast.success(`An email is sent to ${email} with password reset link`, {
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

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="" width={150} height={150} />
        <p style={{ fontSize: 40, color: "#2c7be5", fontWeight: 800 }}>
          falcon
        </p>
      </Box>

      <Box
        sx={{
          width: 450,
          height: 300,
          padding: "48px",
          bgcolor: "#fff",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "5px",
          borderRadius: "5px",
        }}
      >
        <p style={{ fontSize: 19, fontWeight: 500 }}>Забыли пароль?</p>
        <p
          style={{ color: "rgb(94, 110, 130)", fontSize: 12, fontWeight: 400 }}
        >
          Введите свою почту и мы отправим вам ссылку для сброса пароля.
        </p>
        <TextField
          size="small"
          sx={{ width: "100%", paddingTop: "25px" }}
          placeholder="Email address..."
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          component={Link}
          to="simple_confirm_mail"
          type="submit"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
            bgcolor: "rgb(44, 123, 229)",
            width: "100%",
            marginTop: "10px",
            "&:disabled": { opacity: 0.5, color: "#fff" },
          }}
          disabled={!email}
        >
          Отправить ссылку
        </Button>
        <p
          style={{
            color: "rgb(116, 129, 148)",
            fontSize: 13.333,
            fontWeight: 400,
            paddingTop: "20px",
          }}
        >
          Я не могу восстановить свою учетную запись с помощью этой страницы
        </p>
      </Box>
    </form>
  );
};

export default SimpleForgetPassword;
