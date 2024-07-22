import { ChangeEvent, FC, FormEvent, useState } from "react";
import bgImg from "../../../assets/img/generic/14.jpg";
import { toast } from "react-toastify";
import { Box, TextField, Button, Checkbox } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login: FC = () => {
  interface IFormData {
    email: string;
    password: string;
    remember: boolean;
  }

  const [formData, setFormData] = useState<IFormData>({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const response = await axios.post("API", {
        email: formData.email,
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
            gap: "10px",
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
            <p>Логин</p>
            <div>
              <p>
                Новый пользователь?{" "}
                <Link to="split_register">Создать аккаунт</Link>
              </p>
            </div>
          </Box>
          <TextField
            size="small"
            placeholder="Email address"
            style={{ paddingTop: "20px" }}
            onChange={handleFieldChange}
            name="email"
          />
          <TextField
            size="small"
            placeholder="Password"
            sx={{ paddingTop: "30px" }}
            onChange={handleFieldChange}
            name="password"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Checkbox
              name="remember"
              sx={{ appearance: "none", border: "none", outline: "none" }}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  remember: e.target.checked,
                })
              }
            />{" "}
            <p
              style={{
                paddingRight: "85px",
                color: "rgb(94, 110, 130)",
                fontSize: 13.5,
                fontWeight: 500,
              }}
            >
              Запомнить меня
            </p>
            <Link
              to="split_forget_password"
              style={{
                color: "rgb(44, 123, 229)",
                fontWeight: 500,
                fontSize: 13.5,
              }}
            >
              Забыли пароль?
            </Link>
          </Box>
          <Button
            type="submit"
            sx={{
              textTransform: "none",
              bgcolor: "rgb(44, 123, 229)",
              color: "#fff",
              fontSize: 16,
              fontWeight: 400,
              "&:disabled": { opacity: 0.5, color: "#fff" },
            }}
            disabled={
              !formData.password || !formData.email || !formData.remember
            }
          >
            Авторизоваться
          </Button>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: 120,
                height: 1,
                background: "rgb(157, 169, 187)",
              }}
            ></div>
            <p
              style={{
                color: "rgb(157, 169, 187)",
                fontSize: 13.333,
                fontWeight: 400,
              }}
            >
              or log in with
            </p>
            <div
              style={{
                width: 120,
                height: 1,
                background: "rgb(157, 169, 187)",
              }}
            ></div>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Button
              sx={{
                textTransform: "none",
                width: "50%",
                fontSize: 14,
                fontWeight: 500,
                color: "rgb(221, 75, 57)",
                border: "1px solid rgb(221, 75, 57)",
                "&:hover": { bgcolor: "rgb(221, 75, 57)", color: "#fff" },
              }}
            >
              google
            </Button>
            <Button
              sx={{
                textTransform: "none",
                width: "50%",
                fontSize: 14,
                color: "rgb(60, 90, 153)",
                fontWeight: 500,
                border: "1px solid rgb(60, 90, 153)",
                "&:hover": { bgcolor: "rgb(60, 90, 153)", color: "#fff" },
              }}
            >
              facebook
            </Button>
          </Box> */}
        </Box>
      </Box>
    </form>
  );
};

export default Login;
