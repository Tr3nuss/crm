import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Grid,
  Link,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Divider,
} from "@mui/material";
import SocialAuthButtons from "./SocialAuthButtons";
import paths from "routes/paths";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}

interface IRouteProps {
  hasLabel?: boolean;
  layout?: "simple" | "split" | "card";
}

const forgotPasswordPaths: { [key: string]: string } = {
  simple: paths.simpleForgotPassword,
  split: paths.splitForgotPassword,
  card: paths.cardForgotPassword,
};

const LoginForm: React.FC<IRouteProps> = ({
  hasLabel = false,
  layout = "simple",
}) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    remember: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your login logic here
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            {hasLabel && <InputLabel>Email address</InputLabel>}
            <Input
              placeholder={!hasLabel ? "Email address" : ""}
              value={formData.email}
              name="email"
              onChange={handleFieldChange}
              type="email"
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            {hasLabel && <InputLabel>Password</InputLabel>}
            <Input
              placeholder={!hasLabel ? "Password" : ""}
              value={formData.password}
              name="password"
              onChange={handleFieldChange}
              type="password"
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <Checkbox
              checked={formData.remember}
              onChange={(e) =>
                setFormData({ ...formData, remember: e.target.checked })
              }
            />
            <Typography variant="body2">Remember me</Typography>
          </Grid>
          <Grid item>
            <Link
              href={forgotPasswordPaths[layout]}
              variant="body2"
              underline="always"
            >
              Forgot Password?
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={!formData.email || !formData.password}
          >
            Log in
          </Button>
        </Grid>
      </Grid>
      <Divider>or log in with</Divider>
      <SocialAuthButtons />
    </form>
  );
};

export default LoginForm;
