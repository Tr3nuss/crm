import { ChangeEvent, FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { Box, TextField, Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import logo from "../../../assets/img/favicons/mstile-150x150.png";
import axios from "axios";
import { Link } from "react-router-dom";
//@ts-ignore

export const SimpleLogin: FC = () => { 
     window.YaAuthSuggest.init(
      {
        client_id: "fd5f194b3ad94d91a2e2d63ee48d98e1",
        response_type: "token",
        redirect_uri: "https://любас.рф/home_page",
        parentId: 'yandex-button-container'
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

        <div id="yandex-button-container"></div>
        
      </Box>
    </form>
  );
};

export default SimpleLogin;
