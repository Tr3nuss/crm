import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import SimpleRegistration from "../components/authorization/simple/SimpleRegistration";
import routePath from "./routePath";
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
      <Route path={routePath.simpleLogin} element={<SimpleLogin />} />
      <Route path={routePath.simpleRegister} element={<SimpleRegistration />} />
      <Route path={routePath.splitLogin} element={<Login />} />
      <Route path={routePath.splitRegister} element={<Registration />} />
      <Route path={routePath.cardLogin} element={<CardLogin />} />
      <Route path={routePath.cardRegister} element={<CardRegistration />} />
      <Route
        path={routePath.simpleForgetPassword}
        element={<SimpleForgetPassword />}
      />
      <Route
        path={routePath.splitForgetPassword}
        element={<ForgetPassword />}
      />
      <Route
        path={routePath.cardForgetPassword}
        element={<CardForgotPassword />}
      />
    </Routes>
  );
};
