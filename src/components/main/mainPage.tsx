import { FC, useState, useEffect } from "react";
import axios from "axios";

export const MainPage: FC = () => {
  const [userData, setUserData] = useState<object | null>(null);
  const [error, setError] = useState<string | Error | null>(null);

  useEffect(() => {
    //@ts-ignore
    window.YaSendSuggestToken("https://387f47aeacc8.vps.myjino.ru/main_page", {
      flag: true,
    });

    const fetchUserData = async () => {
      //@ts-ignore
      const tokenData = JSON.parse(localStorage.getItem("O-auth-token"));
      let token = tokenData.access_token;

      if (!token) {
        setError("Токен не найден");
        return;
      }
      console.log(token);

      try {
        const response = await axios.get(
          "https://387f47aeacc8.vps.myjino.ru/api/authUser",
          {
            params: { authToken: token },
          }
        );
        console.log(response.data)
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
        <p>{userData.login}</p>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default MainPage;
