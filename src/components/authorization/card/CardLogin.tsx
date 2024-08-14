import { FC } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const CardLogin: FC = () => {
  window.YaAuthSuggest.init(
    {
      client_id: "fd5f194b3ad94d91a2e2d63ee48d98e1",
      response_type: "token",
      redirect_uri: "https://любас.рф/home_page",
      parentId: "yandex-button-container",
    },
    "https://любас.рф/home_page",
    { view: "default" }
  )

    .then(({ handler }) => handler())

    .then((data) => console.log("Сообщение с токеном", data))

    .catch((error) => console.log("Обработка ошибки", error));

  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 350,
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
          С помощью Falcon
          <br /> вы теперь можете сосредоточиться
          <br /> только на функционале
          <br /> ваших цифровых продуктов,
          <br /> используя при этом
          <br /> наш пользовательский интерфейс!
        </p>

        <p style={{ fontSize: 16, color: "#fff", paddingTop: "35px" }}>
          Нет аккаунта?
          <br />{" "}
          <Link to="/card_register" style={{ color: "#fff" }}>
            Начать!
          </Link>
        </p>

        <p style={{ fontSize: 14, color: "#fff", paddingTop: "50px" }}>
          Ознакомьтесь с нашими положениями и условиями
        </p>
      </Box>
      <Box
        sx={{
          width: 500,
          height: 460,
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "90px 48px",
        }}
        id="yandex-button-container"
      ></Box>
    </form>
  );
};

export default CardLogin;
