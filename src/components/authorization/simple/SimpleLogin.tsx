import { FC } from "react";
import { Box } from "@mui/material";
import logo from "../../../assets/img/favicons/logo.png";

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
      localStorage.setItem("O-auth-token", data.access_token);
      window.location.href = "/main_page";
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
          <img src={logo} alt="logo" />
        </Box>

        <div id="button-container-id" style={{ marginTop: "14px" }}></div>
      </Box>
    </form>
  );
};

export default SimpleLogin;
