import React from "react";
import { Modal, Typography, Button, IconButton, Grid } from "@mui/material";
import RegistrationForm from "../RegistrationForm";
import CloseIcon from "@mui/icons-material/Close";
import { useAppContext } from "providers/AppProvider";

const Example: React.FC = () => {
  const {
    config: { openAuthModal },
    setConfig,
  } = useAppContext();

  const handleClose = () => {
    setConfig("openAuthModal", false);
  };

  return (
    <Modal open={openAuthModal} onClose={handleClose} className="mt-4">
      <div className="bg-shape modal-shape-header position-relative px-4 py-2">
        <div className="position-relative" data-bs-theme="light">
          <Typography
            variant="h4"
            className="text-white"
            id="authentication-modal-label"
          >
            Register
          </Typography>
          <Typography variant="body2" className="fs-10 text-white">
            Please create your free Falcon account
          </Typography>
        </div>
        <IconButton
          color="inherit"
          aria-label="close"
          edge="end"
          onClick={handleClose}
          sx={{ position: "absolute", top: 0, right: 0, mt: 2, mr: 2 }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <Grid container justifyContent="center" className="p-4">
        <RegistrationForm hasLabel />
      </Grid>
    </Modal>
  );
};

export default Example;
