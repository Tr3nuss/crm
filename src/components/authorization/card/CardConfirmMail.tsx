import { Box, Button } from "@mui/material";
import envelope from "../../../assets/img/icons/spot-illustrations/16.png";
import { FC } from "react";
import { Link } from "react-router-dom";

export const CardConfirmMail: FC = () => {
  return (
    <Box
      sx={{
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
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
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
          width: 450,
          height: 460,
          padding: "48px",
          bgcolor: "#fff",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
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
          Пожалуйста, проверьте свою почту!
        </p>
        <p
          style={{ color: "rgb(94, 110, 130)", fontSize: 16, fontWeight: 400 }}
        >
          Электронное письмо было отправлено по адресу xyz@abc.com
          <br /> Пожалуйста, перейдите по указанной ссылке, чтобы сбросить свой
          пароль.
        </p>

        <Button
          as={Link}
          to="/card_login"
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

export default CardConfirmMail;
