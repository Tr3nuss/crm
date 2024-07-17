import { Box, TextField, Button } from "@mui/material";
import team1 from "../../../assets/img/team/1.jpg";
import { FC } from "react";

export const CardLockScreen: FC = () => {
  return (
    <Box
      sx={{
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
          With the power of Falcon,
          <br /> you can now focus only on
          <br /> functionaries for your digital
          <br /> products while living the UI
          <br /> desing of us!{" "}
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
            Логин
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
