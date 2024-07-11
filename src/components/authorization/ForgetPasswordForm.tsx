import React, { useState, ChangeEvent, FormEvent } from "react";
import { Button, FormControl, FormHelperText, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { toast } from "react-toastify";

interface ForgetPasswordFormProps {
  layout?: string;
}

const ForgetPasswordForm: React.FC<ForgetPasswordFormProps> = ({
  layout = "simple",
}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      toast.success(`An email is sent to ${email} with a password reset link`, {
        theme: "colored",
      });
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal">
        <TextField
          placeholder="Email address"
          value={email}
          name="email"
          onChange={handleEmailChange}
          type="email"
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!email}
        >
          Send reset link
        </Button>
        <FormHelperText>
          <RouterLink to="#!" className="fs-10 text-600">
            I can't recover my account using this page
          </RouterLink>
        </FormHelperText>
      </FormControl>
    </form>
  );
};

export default ForgetPasswordForm;
