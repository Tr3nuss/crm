import { FC, useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";

export const MainPage: FC = () => {
  interface UserData {
    login: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
  } // интерфейс для отрисовки данных юзера

  const [userData, setUserData] = useState<UserData | null>(null);
  const user = [
    `Никнейм: ${userData?.login}`,
    `Имя: ${userData?.first_name}`,
    `Фамилия: ${userData?.last_name}`,
    `Телефон: ${userData?.phone}`,
    `Почта: ${userData?.email}`,
  ];

  useEffect(() => {
    //@ts-ignore
    window.YaSendSuggestToken("https://387f47aeacc8.vps.myjino.ru/main_page", {
      flag: true,
    });

    const fetchUserData = async () => {
      let token = localStorage.getItem("O-auth-token");

      window.onload = () => {
        if (!token) {
          window.location.href = "/simple_login"; // редирект в случае незареганного пользователя
        }
      };

      try {
        const response = await axios.get<UserData>(
          "https://387f47aeacc8.vps.myjino.ru/api/authUser",
          {
            params: { authToken: token },
          }
        );
        setUserData(response.data);
      } catch (err: any | string) {
        console.error("Ошибка:", err);
      }
    };

    fetchUserData();
  }, []);

  function outlog() {
    localStorage.removeItem("O-auth-token");
    window.location.href = "/simple_login";
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        {userData ? (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {user.map((user, id) => (
              <p
                key={id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  fontSize: 18,
                  fontWeight: 500,
                }}
              >
                {user}
              </p>
            ))}
          </div>
        ) : (
          <p>Загрузка данных...</p>
        )}
      </div>
      <Button
        onClick={outlog}
        sx={{
          maxWidth: "300",
          background: "#696969",
          color: "#fff",
          "&:hover": { background: "#B22222" },
        }}
      >
        Выйти
      </Button>
    </div>
  );
};

export default MainPage;
