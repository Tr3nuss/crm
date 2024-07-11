import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import envelope from "assets/img/icons/spot-illustrations/16.png";
import paths from "routes/paths";

interface ConfirmMailContentProps {
  email: string;
  layout?: string;
  titleTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const loginPaths = {
  simple: paths.simpleLogin,
  split: paths.splitLogin,
  card: paths.cardLogin,
};

const ConfirmMailContent: React.FC<ConfirmMailContentProps> = ({
  email,
  layout = "simple",
  titleTag = "h4",
}) => {
  return (
    <>
      <img
        className="d-block mx-auto mb-4"
        src={envelope}
        alt="sent"
        width={100}
      />
      <Typography variant={titleTag}>Please check your email!</Typography>
      <p>
        An email has been sent to <strong>{email}</strong>. Please click on the
        included link to reset your password.
      </p>
      <Button
        component={Link}
        to={loginPaths[layout]}
        color="primary"
        size="small"
        className="mt-3"
      >
        Return to login
      </Button>
    </>
  );
};

export default ConfirmMailContent;
