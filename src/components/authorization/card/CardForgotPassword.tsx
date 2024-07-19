import { FC, useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, TextField } from "@mui/material";
import axios from "axios";

export const CardForgotPassword: FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      const response = await axios.post("API", { email: email });

      if (response.status === 200) {
        toast.success(`An email is sent to ${email} with password reset link`, {
          theme: "colored",
        });
      } else {
        toast.error("Failed to send reset link");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while sending the reset link");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 460,
          background: "#2c7be5",
          textAlign: "center",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <p
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "#fff",
            paddingTop: "40px",
          }}
        >
          falcon
        </p>
        <p style={{ fontSize: 16, color: "#fff", paddingTop: "35px" }}>
          С помощью Falcon вы теперь можете сосредоточиться только на
          функционале ваших цифровых продуктов, используя при этом наш
          пользовательский интерфейс!
        </p>

        <p style={{ fontSize: 14, color: "#fff", paddingTop: "140px" }}>
          Read our terms and conditions
        </p>
      </Box>
      <Box
        sx={{
          width: 450,
          height: 460,
          padding: "90px 48px",
          bgcolor: "#fff",

          display: "flex",
          flexDirection: "column",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        <p style={{ fontSize: 23, fontWeight: 500 }}>Forgot your password?</p>
        <p
          style={{
            color: "rgb(94, 110, 130)",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "Open Sans",
          }}
        >
          Enter your email and we'll send you a reset link
        </p>
        <TextField
          size="small"
          sx={{ width: "100%", paddingTop: "32px" }}
          placeholder="Email address..."
          type="email"
          name="email"
          onChange={({ EventTarget }) => setEmail(EventTarget.value)}
        />
        <Button
          type="submit"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
            bgcolor: "rgb(44, 123, 229)",
            width: "100%",
            marginTop: "20px",
            "&:disabled": { opacity: 0.5, color: "#fff" },
          }}
          disabled={!email}
        >
          Send reset link
        </Button>
        <p
          style={{
            color: "rgb(116, 129, 148)",
            fontSize: 13.333,
            fontWeight: 400,
            paddingTop: "20px",
          }}
        >
          I can't recover my account using this page
        </p>
      </Box>
    </form>
  );
};
