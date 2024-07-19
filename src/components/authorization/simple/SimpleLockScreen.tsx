import { FC, useState } from "react";
import team1 from "../../../assets/img/team/1.jpg";
import logo from "../../../assets/img/favicons/mstile-150x150.png";
import axios from "axios";
import { toast } from "react-toastify";
import { Box, TextField, Button } from "@mui/material";

const SimpleLockScreen: FC = () => {
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("API", { password: password });

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
          height: 424,
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
            width: 480,
            maxHeight: 500,
            padding: "48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            background: "#fff",
            borderRadius: "10px",
          }}
        >
          <img
            src={team1}
            alt=""
            width={98}
            height={98}
            style={{ borderRadius: "50%", margin: "0 auto" }}
          />

          <p style={{ fontSize: 21 }}>Добрый день!</p>
          <p>Введите свой пароль для доступа к администратору</p>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <TextField
              size="small"
              placeholder="Enter your password..."
              name="password"
              type="password"
              sx={{ width: 230 }}
              onChange={({ EventTarget }) => setPassword(EventTarget.value)}
            />
            <Button
              type="submit"
              sx={{
                width: 85,
                height: 40,
                background: "#2c7be5",
                textTransform: "none",
                fontSize: 16,
                fontWeight: 600,
                color: "#fff",
                "&:disabled": { opacity: 0.5, color: "#fff" },
              }}
              disabled={!password}
            >
              Авторизоваться
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default SimpleLockScreen;
