import { FC } from "react";
import logoutImg from "../../../assets/img/icons/spot-illustrations/45.png";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const SimpleLogout: FC = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <p style={{ fontSize: 40, color: "#2c7be5", fontWeight: 800 }}>falcon</p>
    </Box>

    <Box
      sx={{
        width: 450,
        height: 360,
        padding: "48px",
        bgcolor: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
        borderRadius: "5px",
      }}
    >
      <img src={logoutImg} alt="logoutImg" height={93} width={100} />
      <p style={{ fontSize: 23, fontWeight: 500, paddingTop: "10px" }}>
        Встретимся снова!
      </p>
      <p style={{ color: "rgb(94, 110, 130)", fontSize: 16, fontWeight: 400 }}>
        Спасибо, что пользуетесь falcon. Сейчас вы
        <br />
        успешно вышли из системы
      </p>
      <Button
        component={Link}
        to="/simple_login"
        sx={{
          textTransform: "none",
          width: 150,
          height: 30,
          bgcolor: "rgb(38, 107, 198)",
          fontSize: 14,
          fontWeight: 500,
          color: "#fff",
          marginTop: "20px",
        }}
      >
        Вернуться к авторизации
      </Button>
    </Box>
  </Box>
);

export default SimpleLogout;
