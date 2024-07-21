import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import SimpleRegistration from "../components/authorization/simple/SimpleRegistration";
import SimpleLogin from "../components/authorization/simple/SimpleLogin";
import Login from "../components/authorization/split/Login";
import Registration from "../components/authorization/split/Registration";
import CardLogin from "../components/authorization/card/CardLogin";
import CardRegistration from "../components/authorization/card/CardRegistration";
import SimpleForgetPassword from "../components/authorization/simple/SimpleForgetPassword";
import ForgetPassword from "../components/authorization/split/ForgetPassword";
import { CardForgotPassword } from "../components/authorization/card/CardForgotPassword";

export const RouteNavigation: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CardRegistration />} />
      <Route path="/simple_login" element={<SimpleLogin />} />
      <Route path="/simple_register" element={<SimpleRegistration />} />
      <Route path="/split_login" element={<Login />} />
      <Route path="/split_register" element={<Registration />} />
      <Route path="/card_login" element={<CardLogin />} />
      <Route path="card_register" element={<CardRegistration />} />
      <Route
        path="/simple_forget_password"
        element={<SimpleForgetPassword />}
      />
      <Route path="/split_forget_password" element={<ForgetPassword />} />
      <Route path="/card_forget_password" element={<CardForgotPassword />} />
    </Routes>
  );
};
