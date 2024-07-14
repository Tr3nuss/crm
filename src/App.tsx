import { FC } from "react";
import Registration from "./components/authorization/split/Registration";
import PasswordReset from "./components/authorization/split/PasswordReset";
import SimpleRegistration from "./components/authorization/simple/SimpleRegistration";
import Example from "./components/authorization/modal/ModalAuth";
import SimpleLockScreen from "./components/authorization/simple/SimpleLockScreen";
import LockScreen from "./components/authorization/split/LockScreen";
import { CardLockScreen } from "./components/authorization/card/CardLockScreen";
import SimplePasswordReset from "./components/authorization/simple/SimplePasswordReset";
import CardResetPassword from "./components/authorization/card/CardResetPassword";
import SimpleConfirmMail from "./components/authorization/simple/SimpleConfirmMail";
import CardConfirmMail from "./components/authorization/card/CardConfirmMail";
import ConfirmMail from "./components/authorization/split/ConfirmMail";

export const App: FC = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <ConfirmMail />
      </div>
    </>
  );
};

export default App;
