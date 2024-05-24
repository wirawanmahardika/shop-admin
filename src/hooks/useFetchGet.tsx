import { useEffect, useState } from "react";
import { myAxios } from "../helper/axios";

export default function useFetchGet(url: string) {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    myAxios.get(url, { withCredentials: true }).then((res) => {
      setData(res.data.data);
    });
  }, []);

  return data;
}
