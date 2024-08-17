import { FC } from "react";

export const RedirectPage: FC = () => {
  //@ts-ignore
  window.YaSendSuggestToken("https://387f47aeacc8.vps.myjino.ru/simple_login", {
    flag: true,
  });

  return <h1>Передача токена...</h1>;
};
