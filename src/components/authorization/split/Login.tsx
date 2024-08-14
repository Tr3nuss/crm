import { FC } from "react";
import { Box } from "@mui/material";

export const Login: FC = () => {
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
        gap: 35,
      }}
    >
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
          id="yandex-button-container"
        ></Box>
      </Box>
    </form>
  );
};

export default Login;
