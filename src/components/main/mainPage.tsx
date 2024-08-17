import { FC, useState, useEffect } from "react";
import axios from "axios";

export const MainPage: FC = () => {
  interface UserData {
    login: string;
    first_name: string;
    last_name: string;
  }

  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | Error | null>(null);

  useEffect(() => {
    //@ts-ignore
    window.YaSendSuggestToken("https://387f47aeacc8.vps.myjino.ru/main_page", {
      flag: true,
    });

    const fetchUserData = async () => {
      //@ts-ignore

      let token = localStorage.getItem("O-auth-token");

      window.onload = () => {
        if (!token) {
          window.location.href = "/simple_login";
        }
      };

      console.log(token);

      try {
        const response = await axios.get<UserData>(
          "https://387f47aeacc8.vps.myjino.ru/api/authUser",
          {
            params: { authToken: token },
          }
        );
        console.log(response.data);
        setUserData(response.data);
      } catch (err: any | string) {
        setError(err);
        console.error("Ошибка при получении данных о пользователе:", err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {error && <p>Ошибка: {error.toString()}</p>}
      {userData ? <p>{userData.login}</p> : <p>Загрузка данных...</p>}
    </div>
  );
};

export default MainPage;
