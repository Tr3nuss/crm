import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import team1 from "../../../assets/img/team/1.jpg";
import { toast } from "react-toastify";
import { FC, FormEvent, useState } from "react";
import axios from "axios";

export const CardLockScreen: FC = () => {
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("API", { password: password });

      if (response.status === 200) {
        toast.success(`Logged in`, {
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
          <br /> функционерах для своих цифровых продуктов, используя
          пользовательский интерфейс, разработанный нами!
        </p>

        <p style={{ fontSize: 14, color: "#fff", paddingTop: "140px" }}>
          Read our terms and conditions
        </p>
      </Box>
      <Box
        sx={{
          width: 400,
          height: 460,
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <img
            src={team1}
            alt=""
            height={98}
            width={98}
            style={{ borderRadius: "50%" }}
          />

          <Box>
            <p style={{ fontSize: 21, fontWeight: 500, color: "#344050" }}>
              Добрый день!
            </p>
            <p style={{ fontSize: 16, fontWeight: 300, color: "#5e6e82" }}>
              Enter your password <br />
              to access the admin
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "30px",
            gap: "10px",
          }}
        >
          <TextField
            size="small"
            placeholder="Enter your password..."
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            sx={{
              textTransform: "none",
              background: "#408BD3",
              color: "#fff",
              width: 85,
              height: 36,
              fontSize: "20px",
              fontWeight: 600,
              "&:disabled": { opacity: 0.5, color: "#fff" },
            }}
            disabled={!password}
          >
            Логин
          </Button>
        </Box>
      </Box>
    </form>
  );
};
