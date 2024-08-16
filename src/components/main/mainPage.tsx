import { FC, useState, useEffect } from "react";
import axios from "axios";

export const MainPage: FC = () => {
  const [userData, setUserData] = useState<object | null>(null);
  const [error, setError] = useState<string | Error | null>(null);

  useEffect(() => {
    //@ts-ignore
    window.YaSendSuggestToken(
      "https://387f47aeacc8.vps.myjino.ru/simple_login",
      { flag: true }
    );

    const getTokenFromUrl = () => {
      const params = new URLSearchParams(window.location.hash.slice(1));
      return params.get("access_token");
    };

    const fetchUserData = async (token: string) => {
      try {
        const response = await axios.get<object>(
          "https://jsonplaceholder.typicode.com/users",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(token);
        setUserData(response.data);
      } catch (err: any | string) {
        setError(err);
        console.error("Ошибка при получении данных о пользователе:", err);
      }
    };

    const token = getTokenFromUrl();
    if (token) {
      fetchUserData(token);
      localStorage.setItem("token", token);
    }
  }, []);

  return (
    <div>
      {error && <p>Ошибка</p>}
      {userData ? (
        <div>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};
