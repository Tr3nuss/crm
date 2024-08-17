import { FC } from "react";
import { Box, Button } from "@mui/material";
import logo from "../../../assets/img/favicons/mstile-150x150.png";

//@ts-ignore

export const SimpleLogin: FC = () => {
  interface AuthResponse {
    handler: () => Promise<TokenData>;
  }

  interface TokenData {
    access_token: string;

    expiresIn?: number;
    tokenType?: string;
  }

  interface AuthError {
    message: string;
  }

  //@ts-ignore
  window.YaAuthSuggest.init(
    {
      client_id: "ff2f6ad081c24efca5b6511111bedced",
      response_type: "token",
      redirect_uri: "https://387f47aeacc8.vps.myjino.ru/main_page",
    },
    "https://387f47aeacc8.vps.myjino.ru/simple_login",
    {
      view: "button",
      parentId: "button-container-id",
      buttonSize: "m",
      buttonView: "main",
      buttonTheme: "light",
      buttonBorderRadius: "0",
      buttonIcon: "ya",
    }
  )
    .then(({ handler }: AuthResponse) => handler())
    .then((data: TokenData) => {
      console.log("Сообщение с токеном", data);
      //@ts-ignore
      localStorage.setItem("O-auth-token", JSON.stringify(data));
    })
    .catch((error: AuthError) => console.log("Обработка ошибки", error));

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

        <div id="button-container-id"></div>
        <Button>Войти</Button>
      </Box>
    </form>
  );
};

export default SimpleLogin;
