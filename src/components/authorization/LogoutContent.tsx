import { FC } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import logoutImg from "assets/img/icons/spot-illustrations/45.png";
import paths from "routes/paths";

interface Props {
  layout?: "simple" | "split" | "card";
  titleTag?: keyof JSX.IntrinsicElements;
}

const loginPaths: { [key: string]: string } = {
  simple: paths.simpleLogin,
  split: paths.splitLogin,
  card: paths.cardLogin,
};

const LogoutContent: FC<Props> = ({ layout = "simple" }) => {
  return (
    <>
      <img
        className="d-block mx-auto mb-4"
        src={logoutImg}
        alt="shield"
        width={100}
      />
      <h4>See you again!</h4>
      <p>
        Thanks for using Falcon. You are <br className="d-none d-sm-block" />
        now successfully signed out.
      </p>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className="mt-3"
        component={Link}
        to={loginPaths[layout]}
      >
        Return to Login
      </Button>
    </>
  );
};

export default LogoutContent;
