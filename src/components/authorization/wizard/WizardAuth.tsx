import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Section from "components/common/Section";
import Logo from "components/common/Logo";
import Wizard from "components/wizard/Wizard";

const WizardAuth: React.FC = () => {
  return (
    <Section className="py-0">
      <Container>
        <Grid container justifyContent="center" paddingTop={6}>
          <Grid item xs={12} sm={10} lg={7} xl={5}>
            <Logo width={45} textClass="fs-5" />
            <Wizard validation={true} />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default WizardAuth;
