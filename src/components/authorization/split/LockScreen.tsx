import { FC, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import team1 from "../../../assets/img/team/1.jpg";
import bgImg from "../../../assets/img/generic/18.jpg";

const LockScreen: FC = () => {
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
        gap: 35,
      }}
    >
      <img src={bgImg} alt="" style={{ height: 1080, width: "50%" }} />
      <Box
        sx={{
          width: 480,
          height: 300,
          background: "#fff",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            width: 480,
            height: 70,
            background: "#408BD3",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: 32, fontWeight: 800, color: "#fff" }}>falcon</p>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              paddingTop: "29px",
              paddingLeft: "90px",
            }}
          >
            <img
              src={team1}
              alt=""
              height={98}
              width={98}
              style={{ borderRadius: "50%" }}
            />
            <Box>
              <p style={{ fontSize: 21, fontWeight: 600 }}>Hi! Emma</p>
              <p>
                Введите пароль, чтобы
                <br /> получить доступ к админу
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
              type="password"
              name="password"
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
              Авторизоваться
            </Button>
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default LockScreen;
