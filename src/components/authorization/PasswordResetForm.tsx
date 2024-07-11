import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  Grid,
} from "@mui/material";

interface FormData {
  password: string;
  confirmPassword: string;
}

const SetPasswordForm: React.FC<{ hasLabel: boolean }> = ({ hasLabel }) => {
  const [formData, setFormData] = useState<FormData>({
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              {hasLabel && <InputLabel>New Password</InputLabel>}
              <Input
                placeholder={!hasLabel ? "New Password" : ""}
                value={formData.password}
                name="password"
                onChange={handleFieldChange}
                type="password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              {hasLabel && <InputLabel>Confirm Password</InputLabel>}
              <Input
                placeholder={!hasLabel ? "Confirm Password" : ""}
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={handleFieldChange}
                type="password"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={!formData.password || !formData.confirmPassword}
            >
              Set password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SetPasswordForm;
