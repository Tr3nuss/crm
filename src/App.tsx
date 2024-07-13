import { FC } from "react";
import Registration from "./components/authorization/split/Registration";
import PasswordReset from "./components/authorization/split/PasswordReset";
import SetPasswordForm from "./components/authorization/PasswordResetForm";
import SimpleRegistration from "./components/authorization/simple/SimpleRegistration";
import Example from "./components/authorization/modal/ModalAuth";

export const App: FC = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <Example />
      </div>
    </>
  );
};

export default App;
