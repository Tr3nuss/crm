import { FC } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import envelope from "../../../assets/img/icons/spot-illustrations/16.png";
import { Link } from "react-router-dom";

const SimpleConfirmMail: FC = () => {
  return (
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
        <img src={logo} alt="" width={150} height={150} />
        <p style={{ fontSize: 40, color: "#2c7be5", fontWeight: 800 }}>
          falcon
        </p>
      </Box>

      <Box
        sx={{
          width: 450,
          height: 400,
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
        <img src={envelope} alt="envelope" width={100} height={93} />
        <p
          style={{
            color: "rgb(52, 64, 80)",
            fontSize: 23,
            fontWeight: 500,
            paddingTop: "20px",
          }}
        >
          Пожалуйста, проверьте почту!
        </p>
        <p
          style={{ color: "rgb(94, 110, 130)", fontSize: 16, fontWeight: 400 }}
        >
          Письмо было отправлено на адрес xyz@abc.com
          <br /> Пожалуйста, кликните на появившуюся ссылку, чтобы сбросить
          пароль
        </p>

        <Button
          component={Link}
          to="simple_login"
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
};

export default SimpleConfirmMail;
