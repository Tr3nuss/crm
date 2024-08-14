import { FC, useState, useEffect } from "react";
import axios from "axios";

export const MainPage: FC = () => {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Функция для извлечения токена из URL
        const getTokenFromUrl = () => {
            const params = new URLSearchParams(window.location.hash.slice(1));
            return params.get('access_token');
        };

        const fetchUserData = async (token: string) => {
            try {
                const response = await axios.get("https://387f47aeacc8.vps.myjino.ru/api", {
                    headers: {
                        Authorization: token
                    }
                });
                setUserData(response.data);
            } catch (err: any | string) {
                setError(err);
                console.error('Ошибка при получении данных о пользователе:', err);
            }
        };

        const token = getTokenFromUrl();
        if (token) {
            fetchUserData(token);
        }
    }, []);

    return (
        <div>
            {error && <p>Ошибка</p>}
            {userData ? (
                <div>
                    <h1>Данные пользователя</h1>
                    <pre>{JSON.stringify(userData, null, 2)}</pre>
                </div>
            ) : (
                <p>Загрузка данных...</p>
            )}
        </div>
    );
};
}