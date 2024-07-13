import { FC } from "react";
import Registration from "./components/authorization/split/Registration";
import PasswordReset from "./components/authorization/split/PasswordReset";
import SetPasswordForm from "./components/authorization/PasswordResetForm";
import SimpleRegistration from "./components/authorization/simple/SimpleRegistration";
import Example from "./components/authorization/modal/ModalAuth";
import SimpleLockScreen from "./components/authorization/simple/SimpleLockScreen";
import LockScreen from "./components/authorization/split/LockScreen";
import { CardLockScreen } from "./components/authorization/card/CardLockScreen";

export const App: FC = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <CardLockScreen />
      </div>
    </>
  );
};

export default App;
