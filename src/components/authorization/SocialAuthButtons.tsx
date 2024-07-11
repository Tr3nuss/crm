import { FC } from "react";
import { Button, Grid } from "@mui/material";

const SocialAuthButtons: FC = () => (
  <Grid container spacing={2}>
    <Grid item xs={6}>
      <Button
        variant="outlined"
        size="small"
        className="btn-outline-google-plus mt-2 w-100"
      >
        Google
      </Button>
    </Grid>
    <Grid item xs={6}>
      <Button
        variant="outlined"
        size="small"
        className="btn-outline-facebook mt-2 w-100"
      >
        Facebook
      </Button>
    </Grid>
  </Grid>
);

export default SocialAuthButtons;
