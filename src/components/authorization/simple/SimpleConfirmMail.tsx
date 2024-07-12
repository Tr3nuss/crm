import { FC } from "react";
import ConfirmMailContent from "../ConfirmMailContent";

const SimpleConfirmMail: FC = () => (
  <div className="text-center">
    <ConfirmMailContent email="xyz@abc.com" />
  </div>
);

export default SimpleConfirmMail;
