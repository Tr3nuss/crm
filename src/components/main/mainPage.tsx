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

    const fetchUserData = async () => {
      const token = localStorage.getItem("O-auth-token");
      if (!token) {
        setError("Токен не найден");
        return;
      }
      console.log(token);

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Исправлено для правильной передачи токена
            },
          }
        );
        setUserData(response.data as object | null);
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
      {userData ? (
        <div>Здесь будут отображаться данные пользователя</div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default MainPage;
