import { FC } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import bgImg from "../../../assets/img/generic/19.jpg";
import logoutImg from "../../../assets/img/icons/spot-illustrations/45.png";
import { Link } from "react-router-dom";

export const Logout: FC = () => {
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
        <Box
          sx={{
            padding: "29px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={logoutImg} alt="logoutImg" height={93} width={100} />
          <p style={{ fontSize: 23, fontWeight: 500, paddingTop: "10px" }}>
            Встретимся снова!
          </p>
          <p
            style={{
              color: "rgb(94, 110, 130)",
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Спасибо, что пользуетесь falcon. Сейчас вы
            <br />
            успешно вышли из системы
          </p>
          <Button
            component={Link}
            to="split_login"
            sx={{
              textTransform: "none",
              width: 150,
              height: 30,
              bgcolor: "rgb(38, 107, 198)",
              fontSize: 14,
              fontWeight: 500,
              color: "#fff",
              marginTop: "20px",
            }}
          >
            Вернуться к авторизации
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Logout;