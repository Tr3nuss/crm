import { FC } from "react";
import PasswordResetForm from "../PasswordResetForm";

export const SimplePasswordReset: FC = () => (
  <div className="text-center">
    <h5>Reset new password</h5>
    <PasswordResetForm hasLabel />
  </div>
);

export default SimplePasswordReset;
