import { useEffect, useState } from "react";
import { myAxios } from "../helper/axios";
import { useNavigate } from "react-router-dom";

export default function useGetUser() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    myAxios
      .get("/api/users/getme", {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {
        navigate("/login", { state: "anda tidak memiliki izin" });
      });
  }, []);

  return data;
}
