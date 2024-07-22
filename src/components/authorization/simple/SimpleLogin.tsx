import { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Box, TextField, Button, Checkbox } from "@mui/material";
import logo from "../../../assets/img/favicons/mstile-150x150.png";
import axios from "axios";
import { Link } from "react-router-dom";

export const SimpleLogin: FC = () => {
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
            <p>Авторизоваться</p>
            <p
              style={{
                color: "rgb(44, 123, 229)",
                fontWeight: 400,
                fontSize: 13.5,
              }}
            >
              или <Link to="/simple_register">создать аккаунт</Link>
            </p>
          </Box>
          <TextField
            size="small"
            placeholder="Email address"
            name="email"
            type="email"
            onChange={handleFieldChange}
          />
          <TextField
            name="password"
            size="small"
            type="password"
            placeholder="Password"
            onChange={handleFieldChange}
            sx={{ paddingTop: "5px" }}
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
              onChange={(e) =>
                setFormData({
                  ...formData,
                  remember: e.target.checked,
                })
              }
            />
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
              to="/simple_forget_password"
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

export default SimpleLogin;
