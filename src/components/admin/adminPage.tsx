import { Box, TextField, Button } from "@mui/material";
import { ChangeEvent, FC, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AdminPage: FC = () => {
  interface IPostAdminData {
    name: string;
    description?: string;
    type?: string;
  }

  interface IGetAdminData {
    id?: number;
    name: string;
    description: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  }

  const [adminData, setAdminData] = useState<IPostAdminData>({
    name: "",
    description: "",
    type: "",
  });

  const [data, setData] = useState<IGetAdminData[]>([]);

  const [changeDataForm, setChangeDataForm] = useState<boolean>(false);

  const { name, description, type } = adminData;

  const handleChange =
    (field: keyof IPostAdminData) => (event: ChangeEvent<HTMLInputElement>) => {
      setAdminData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const setAdminDataField = async () => {
    try {
      const postAdminData = await axios.post<IGetAdminData>(
        "https://387f47aeacc8.vps.myjino.ru/api/adminField/create",
        adminData
      );

      if (postAdminData.status < 300) {
        const getAdminData = await axios.get(
          "https://387f47aeacc8.vps.myjino.ru/api/adminField/getAll"
        );

        const data = getAdminData.data;
        setData(data);
      }
    } catch (err: any | string) {
      toast.error(err);
    }
  };

  return (
    <Box>
      <Box>
        <TextField
          label="Имя"
          size="small"
          variant="outlined"
          value={name}
          onChange={handleChange("name")}
        />
        <TextField
          label="Где находится"
          size="small"
          variant="outlined"
          value={description}
          onChange={handleChange("description")}
        />
        <TextField
          label="Тип"
          size="small"
          variant="outlined"
          value={type}
          onChange={handleChange("type")}
        />

        <Button
          onClick={setAdminDataField}
          sx={{ "&:hover": { bgcolor: "#1435AD" }, bgcolor: "#057D9F" }}
        >
          Создать пост
        </Button>
      </Box>

      <Box>
        {data.map((item) => (
          <Box key={item.id}>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.id}</div>
            <Button onClick={(show) => setChangeDataForm(!show)}>
              Редактировать
            </Button>
            <Box>
              {changeDataForm && (
                <Box>
                  <TextField
                    label="Имя"
                    size="small"
                    variant="outlined"
                    value={name}
                    onChange={handleChange("name")}
                  />
                  <TextField
                    label="Где находится"
                    size="small"
                    variant="outlined"
                    value={description}
                    onChange={handleChange("description")}
                  />
                  <TextField
                    label="Тип"
                    size="small"
                    variant="outlined"
                    value={type}
                    onChange={handleChange("type")}
                  />{" "}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AdminPage;
