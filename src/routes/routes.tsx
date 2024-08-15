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
import SimpleConfirmMail from "../components/authorization/simple/SimpleConfirmMail";
import ConfirmMail from "../components/authorization/split/ConfirmMail";
import CardConfirmMail from "../components/authorization/card/CardConfirmMail";
import SimplePasswordReset from "../components/authorization/simple/SimplePasswordReset";
import PasswordReset from "../components/authorization/split/PasswordReset";
import CardResetPassword from "../components/authorization/card/CardResetPassword";
import SimpleLogout from "../components/authorization/simple/SimpleLogout";
import Logout from "../components/authorization/split/Logout";
import CardLogout from "../components/authorization/card/CardLogout";
import SimpleLockScreen from "../components/authorization/simple/SimpleLockScreen";
import LockScreen from "../components/authorization/split/LockScreen";
import { CardLockScreen } from "../components/authorization/card/CardLockScreen";
import { MainPage } from "../components/main/mainPage";

export const RouteNavigation: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SimpleRegistration />} />
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
      <Route path="/simple_confirm_mail" element={<SimpleConfirmMail />} />
      <Route path="/split_confirm_mail" element={<ConfirmMail />} />
      <Route path="/card_confirm_mail" element={<CardConfirmMail />} />
      <Route path="/simple_password_reset" element={<SimplePasswordReset />} />
      <Route path="/split_password_reset" element={<PasswordReset />} />
      <Route path="/card_password_reset" element={<CardResetPassword />} />
      <Route path="/simple_logout" element={<SimpleLogout />} />
      <Route path="/split_logout" element={<Logout />} />
      <Route path="/card_logout" element={<CardLogout />} />
      <Route path="/simple_lock_screen" element={<SimpleLockScreen />} />
      <Route path="/split_lock_screen" element={<LockScreen />} />
      <Route path="/card_lock_screen" element={<CardLockScreen />} />
      <Route path='/main_page' element={<MainPage />} />
    </Routes>
  );
};
