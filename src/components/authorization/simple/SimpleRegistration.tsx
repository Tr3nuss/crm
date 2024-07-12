import { FC } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import RegistrationForm from "../RegistrationForm";
import paths from "routes/paths";

const SimpleRegistration: FC = () => (
  <Grid container justifyContent="center" alignItems="center" spacing={2}>
    <Grid item xs={12}>
      <Typography variant="h5" id="modalLabel">
        Register
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="body1" className="fs-10 text-600 mb-0">
        Have an account? <Link to={paths.simpleLogin}>Login</Link>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <RegistrationForm />
    </Grid>
  </Grid>
);

export default SimpleRegistration;
