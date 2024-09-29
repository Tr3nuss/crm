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

  // interface IPutAdminData {
  //   name: string;
  //   description: string;
  //   type: string;
  // }

  interface IGetAdminData {
    id?: number | undefined;
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

  // const [updateAdminData, setUpdateAdminData] = useState<IPutAdminData>({
  //   name: "",
  //   description: "",
  //   type: "",
  // });

  const { name, description, type } = adminData;

  const [data, setData] = useState<IGetAdminData[]>([]);

  const [changeDataForm, setChangeDataForm] = useState<boolean>(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdminData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdminData((prev) => ({
      ...prev,
      description: e.target.value,
    }));
  };

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setAdminData((prev) => ({
      ...prev,
      type: e.target.value,
    }));
  };

  const handleChangeDataUpdateForm = () => {
    setChangeDataForm((prev) => !prev);
  };

  const getAdminDataField = async () => {
    const getAdminData = await axios.get<IGetAdminData[]>(
      "https://387f47aeacc8.vps.myjino.ru/api/adminField/getAll"
    );

    setData(getAdminData.data);
  };

  getAdminDataField();

  const setAdminDataField = async () => {
    try {
      await axios.post(
        "https://387f47aeacc8.vps.myjino.ru/api/adminField/create",
        adminData
      );
    } catch (err: any | string) {
      toast.error(err);
    }
  };

  const updateAdminDataField = async (ident: number) => {
    try {
      const updateAdminData = await axios.put(
        "https://387f47aeacc8.vps.myjino.ru/api/adminField/update",
        {
          id: ident,
          ...adminData,
        }
      );

      console.log(updateAdminData);
    } catch (err) {
      console.error(err);
    }
  };

  async function removeAdminDataField(ident: number | undefined) {
    if (ident === undefined) return;

    try {
      const deleteResponse = await axios.delete(
        "https://387f47aeacc8.vps.myjino.ru/api/adminField/delete",
        //@ts-ignore
        { data: { id: ident } }
      );

      console.log(deleteResponse);
      setData((prevData) => prevData.filter((item) => item.id !== ident));
    } catch (error: any | string) {
      console.error(
        "Ошибка при удалении:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <Box>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <TextField
          label="Имя"
          size="small"
          variant="outlined"
          defaultValue={name}
          onChange={handleNameChange}
          sx={{ width: "300px" }}
        />
        <TextField
          label="Описание"
          size="small"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
          sx={{ width: "300px" }}
        />
        <select
          value={type}
          onChange={handleTypeChange}
          style={{ width: "300px", height: "40px" }}
        >
          <option value="string">Текстовое поле</option>
          <option value="int">Целое число</option>
          <option value="float64">Дробное число</option>
        </select>

        <Button
          onClick={setAdminDataField}
          sx={{
            "&:hover": { bgcolor: "#1435AD", color: "#fff" },
            bgcolor: "#61B7CF",
            color: "#000",
            textTransform: "none",
            width: "200px",
          }}
        >
          Создать пост
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: "1520px",
              margin: "30px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>{name}</div>
            <div>{item.name}</div>
            <div>{item.type}</div>
            <div>{item.description}</div>
            <Button onClick={handleChangeDataUpdateForm}>Редактировать</Button>
            <Button onClick={() => removeAdminDataField(item.id)}>
              Удалить
            </Button>

            <Box>
              {changeDataForm && (
                <Box>
                  <TextField
                    label="Имя"
                    size="small"
                    variant="outlined"
                    value={name}
                  />
                  <TextField
                    label="Описание"
                    size="small"
                    variant="outlined"
                    value={description}
                  />
                  <select style={{ width: "300px", height: "40px" }}>
                    <option value="string">Текстовое поле</option>
                    <option value="int">Целое число</option>
                    <option value="float64">Дробное число</option>
                  </select>
                  <Button
                    onClick={() => {
                      if (item.id !== undefined) {
                        updateAdminDataField(item.id);
                      }
                    }}
                  >
                    Подтвердить
                  </Button>
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
