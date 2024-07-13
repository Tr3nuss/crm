import { FC } from "react";
import Registration from "./components/authorization/split/Registration";
import PasswordReset from "./components/authorization/split/PasswordReset";
import SetPasswordForm from "./components/authorization/PasswordResetForm";
import SimpleRegistration from "./components/authorization/simple/SimpleRegistration";

export const App: FC = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SimpleRegistration />
      </div>
    </>
  );
};

export default App;
