import { FC } from "react";
import { Link } from "react-router-dom";
import AuthCardLayout from "layouts/AuthCardLayout";
import RegistrationForm from "../RegistrationForm";
import { Button } from "@mui/material";
import paths from "routes/paths";

const CardRegistration: FC = () => {
  return (
    <AuthCardLayout
      leftSideContent={
        <p className="pt-3 text-white">
          Have an account?
          <br />
          <Button
            as={Link}
            variant="outlined"
            className="mt-2 px-4"
            to={paths.cardLogin}
          >
            Log In
          </Button>
        </p>
      }
      footer={false}
    >
      <h3>Register</h3>
      <RegistrationForm layout="card" hasLabel />
    </AuthCardLayout>
  );
};

export default CardRegistration;
