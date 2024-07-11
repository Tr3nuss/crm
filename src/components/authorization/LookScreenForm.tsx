import { FC, useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { toast } from "react-toastify";

interface LockScreenFormProps {
  type: "simple" | "split" | "card";
}

const LockScreenForm: FC<LockScreenFormProps> = ({ type }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(`Logged in as Emma Watson`, { theme: "colored" });
    setPassword(""); // Clear the password field after login
    // You can add redirection logic here
  };

  return (
    <Grid
      container
      spacing={2}
      mt={4}
      className={type === "simple" ? "mx-sm-4 mb-2" : ""}
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid item>
        <TextField
          placeholder="Enter your password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Grid>
      <Grid item xs={type === "simple" ? undefined : 4}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!password}
          fullWidth={type !== "simple"}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};

export default LockScreenForm;
