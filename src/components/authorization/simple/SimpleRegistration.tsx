import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { styled } from '@mui/system';

const StyledForm = styled('form')({
  margin: '0 auto',
  maxWidth: 400,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const RegistrationForm = ({ hasLabel }) => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAccepted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Successfully registered as ${formData.name}`);
  };

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        label={hasLabel ? 'Name' : ''}
        placeholder={!hasLabel ? 'Name' : ''}
        value={formData.name}
        name="name"
        onChange={handleFieldChange}
        type="text"
      />

      <TextField
        label={hasLabel ? 'Email address' : ''}
        placeholder={!hasLabel ? 'Email address' : ''}
        value={formData.email}
        name="email"
        onChange={handleFieldChange}
        type="text"
      />

      <TextField
        label={hasLabel ? 'Password' : ''}
        placeholder={!hasLabel ? 'Password' : ''}
        value={formData.password}
        name="password"
        onChange={handleFieldChange}
        type="password"
      />

      <TextField
        label={hasLabel ? 'Confirm Password' : ''}
        placeholder={!hasLabel ? 'Confirm Password' : ''}
        value={formData.confirmPassword}
        name="confirmPassword"
        onChange={handleFieldChange}
        type="password"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={formData.isAccepted}
            onChange={(e) =>
              setFormData({
                ...formData,
                isAccepted: e.target.checked,
              })
            }
            name="isAccepted"
          />
        }
        label={
          <Typography>
            I accept the <a href="#!">terms</a> and <a href="#!">privacy policy</a>
          </Typography>
        }
      />

      <Button
        variant="contained"
        color="primary"
        type="submit"
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

      <Typography variant="subtitle1" align="center">
        or register with
      </Typography>

      {/* Assuming SocialAuthButtons is another component */}
      {/* <SocialAuthButtons /> */}
    </StyledForm>
  );
};

RegistrationForm.propTypes = {
  hasLabel: PropTypes.bool,
};

export default RegistrationForm;