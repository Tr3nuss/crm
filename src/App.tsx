import { FC } from "react";
import Registration from "./components/authorization/split/Registration";
import PasswordReset from "./components/authorization/split/PasswordReset";
import SetPasswordForm from "./components/authorization/PasswordResetForm";

export const App: FC = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SetPasswordForm hasLabel />
      </div>
    </>
  );
};

export default App;
