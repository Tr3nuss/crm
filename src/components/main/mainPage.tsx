import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

export const MainPage: FC = () => {
  interface UserData {
    id: string;
    yandexId: string;
  } // интерфейс для отрисовки данных юзера

  const [userData, setUserData] = useState<UserData | null>(null);
  const user = [`id: ${userData?.id}`, `yandexId: ${userData?.yandexId}`];
  let token: string | null = localStorage.getItem("O-auth-token");
  const navigate = useNavigate();

  useEffect(() => {
    //@ts-ignore
    window.YaSendSuggestToken("https://387f47aeacc8.vps.myjino.ru/main_page", {
      flag: true,
    });

    const fetchUserData = async () => {
      // window.onload = () => {
      //   if (!token) {
      //     window.location.href = "/simple_login"; // редирект в случае незареганного пользователя
      //   }
      // };

      try {
        const response = await axios.get<UserData>(
          "https://387f47aeacc8.vps.myjino.ru/api/authUser",
          {
            params: { token: token },
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
        flexDirection: "column",
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

      <Button
        disabled={!token}
        onClick={() => navigate("/admin_page")}
        sx={{ bgcolor: "grey", color: "#fff" }}
        size="small"
      >
        Зайти в админку
      </Button>
    </div>
  );
};

export default MainPage;
