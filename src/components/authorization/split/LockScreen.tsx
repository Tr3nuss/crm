import { FC } from "react";
import { Box, TextField, Button } from "@mui/material";
import team1 from "../../../assets/img/team/1.jpg";
import bgImg from "../../../assets/img/generic/18.jpg";

const LockScreen: FC = () => {
  return (
    <Box
      sx={{
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
            <TextField size="small" placeholder="Enter your password..." />
            <Button
              sx={{
                textTransform: "none",
                background: "#408BD3",
                color: "#fff",
                width: 85,
                height: 36,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Авторизоваться
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LockScreen;
