import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Avatar from "components/common/Avatar";
import LockScreenForm from "../LookScreenForm";
import AuthSplitLayout from "layouts/AuthSplitLayout";
import Flex from "components/common/Flex";
import team1 from "assets/img/team/1.jpg";
import bgImg from "assets/img/generic/18.jpg";

const LockScreen: React.FC = () => {
  return (
    <AuthSplitLayout bgProps={{ image: bgImg }}>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm="auto">
            <Flex alignItems="center">
              <Avatar src={team1} size="4xl" className="me-4" />
              <div>
                <Typography variant="h4">Hi! Emma</Typography>
                <Typography variant="body2" paragraph>
                  Enter your password <br />
                  to access the admin.
                </Typography>
              </div>
            </Flex>
            <LockScreenForm className="mt-4" />
          </Grid>
        </Grid>
      </Container>
    </AuthSplitLayout>
  );
};

export default LockScreen;
