import { FC, useState, useEffect } from "react";
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
        window.location.href = "/simple_login";
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <p
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          {userData.login}, {userData.first_name}, {userData.last_name}{" "}
          {userData.email}, {userData.phone}
        </p>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default MainPage;
