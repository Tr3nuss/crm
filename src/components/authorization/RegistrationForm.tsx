import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Divider,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SocialAuthButtons from "./SocialAuthButtons";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAccepted: boolean;
}

const RegistrationForm: React.FC<{ hasLabel: boolean }> = ({ hasLabel }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Successfully registered as ${formData.name}`, {
      theme: "colored",
    });
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label={hasLabel ? "Name" : ""}
              placeholder={!hasLabel ? "Name" : ""}
              value={formData.name}
              name="name"
              onChange={handleFieldChange}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={hasLabel ? "Email address" : ""}
              placeholder={!hasLabel ? "Email address" : ""}
              value={formData.email}
              name="email"
              onChange={handleFieldChange}
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={hasLabel ? "Password" : ""}
              placeholder={!hasLabel ? "Password" : ""}
              value={formData.password}
              name="password"
              onChange={handleFieldChange}
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label={hasLabel ? "Confirm Password" : ""}
              placeholder={!hasLabel ? "Confirm Password" : ""}
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleFieldChange}
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.isAccepted}
                  onChange={(e) =>
                    setFormData({ ...formData, isAccepted: e.target.checked })
                  }
                />
              }
              label={
                <>
                  I accept the <Link href="#!">terms</Link> and{" "}
                  <Link href="#!">privacy policy</Link>
                </>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.password ||
                !formData.confirmPassword ||
                !formData.isAccepted
              }
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <Divider>or register with</Divider>
      <SocialAuthButtons />
      <ToastContainer />
    </Container>
  );
};

export default RegistrationForm;
