import { FC } from "react";
import bgImg from "../../../assets/img/generic/16.jpg";
import envelope from "../../../assets/img/icons/spot-illustrations/16.png";
import { Box, Button } from "@mui/material";

export const ConfirmMail: FC = () => {
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
          height: 350,
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
            padding: "48px",
            bgcolor: "#fff",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            borderRadius: "5px",
          }}
        >
          <img src={envelope} alt="envelope" width={100} height={93} />
          <p
            style={{
              color: "rgb(52, 64, 80)",
              fontSize: 23,
              fontWeight: 500,
              paddingTop: "20px",
            }}
          >
            Please check your email!
          </p>
          <p
            style={{
              color: "rgb(94, 110, 130)",
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Электронное письмо было отправлено по адресу xyz@abc.com
            <br /> Пожалуйста, перейдите по указанной ссылке, чтобы сбросить
            свой пароль.
          </p>

          <Button
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

export default ConfirmMail;
