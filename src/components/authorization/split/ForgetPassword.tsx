import { FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, TextField } from "@mui/material";
import bgImg from "../../../assets/img/generic/17.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgetPassword: FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
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
        gap: 35,
      }}
    >
      <img src={bgImg} alt="" style={{ height: 1080, width: "50%" }} />
      <Box>
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
            width: 480,
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
            style={{
              color: "rgb(94, 110, 130)",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            Отправьте свою почту, и мы пришлем ссылку для сброса пароля
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
            type="submit"
            as={Link}
            to="split_confirm_mail"
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
            Отправить ссылку для сброса
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
      </Box>
    </form>
  );
};

export default ForgetPassword;
