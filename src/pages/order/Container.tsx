import {
  Dispatch,
  Fragment,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import useFetchGet from "../../hooks/useFetchGet";
import dayjs from "dayjs";
import { myAxios } from "../../helper/axios";
import { useNavigate } from "react-router-dom";
import numberWithDot from "../../helper/numberWithCommas";

export default function ContainerOrder() {
  const [orderState, dispatch] = useReducer(orderReducer, { id_penjualan: 0 });
  const [detailItemTerjual, setDetailItemTerjual] = useState<any>();
  const [statusVisibility, setStatusVisibility] = useState(false);
  const [detailVisibility, setDetailVisibility] = useState(false);
  const delivers = useFetchGet("/api/penjualan");

  const displayDelivers =
    delivers &&
    delivers.map((d, i) => {
      const price = d.item_terjual.reduce((a: any, b: any) => a + b.price, 0);

      return (
        <tr key={d.id_penjualan}>
          <td className="border-2 border-black text-center p-1">{i + 1}</td>
          <td className="border-2 border-black text-center p-1">
            {d.users.username}
          </td>
          <td className="border-2 border-black text-center p-1">
            {dayjs(d.tanggal_beli).format("HH:mm DD-MM-YY")}
          </td>
          <td className="border-2 border-black text-center p-1">{d.status}</td>
          <td className="border-2 border-black text-center p-1">
            Rp {numberWithDot(price)}
          </td>
          <td className="border-2 border-black p-1">
            <div className="flex justify-around">
              <button className="px-2 py-0.5 font-normal bg-red-500">
                Hapus
              </button>
              <button
                onClick={() => {
                  setStatusVisibility((prev) => !prev);
                  dispatch({
                    type: "set",
                    payload: { id_penjualan: d.id_penjualan },
                  });
                }}
                className="px-2 py-0.5 font-normal bg-green-500"
              >
                Set Status
              </button>
              <button
                onClick={() => {
                  const targetDeliver = delivers?.find(
                    (td) => td.id_penjualan === d.id_penjualan
                  );
                  setDetailItemTerjual(targetDeliver.item_terjual);
                  setDetailVisibility((prev) => !prev);
                }}
                className="px-2 py-0.5 font-normal bg-sky-500"
              >
                Detail
              </button>
            </div>
          </td>
        </tr>
      );
    });

  return (
    <div className="p-5 flex flex-col gap-y-6">
      <span className="font-bold text-5xl text-center">Orders</span>

      <table className="border-collapse">
        <thead>
          <tr>
            <th className="border-2 border-black bg-black text-white w-1/12">
              No
            </th>
            <th className="border-2 border-black bg-black text-white w-2/12">
              Username
            </th>
            <th className="border-2 border-black bg-black text-white w-2-12">
              Tanggal Beli
            </th>
            <th className="border-2 border-black bg-black text-white w-1/12">
              Status
            </th>
            <th className="border-2 border-black bg-black text-white w-2/12">
              Total
            </th>
            <th className="border-2 border-black bg-black text-white w-4/12">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>{displayDelivers}</tbody>
      </table>

      <SetStatusAndDeleteConfirmation
        visible={statusVisibility}
        setVisibility={setStatusVisibility}
        id_penjualan={orderState.id_penjualan}
      />

      <DetailComp
        visible={detailVisibility}
        setVisibility={setDetailVisibility}
        itemTerjual={detailItemTerjual}
      />
    </div>
  );
}

function SetStatusAndDeleteConfirmation({
  id_penjualan,
  visible,
  setVisibility,
}: {
  id_penjualan?: number;
  visible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const handleSetOrder = (status: "dikirim" | "pengemasan" | "sampai") => {
    myAxios
      .patch(
        "/api/penjualan/status/" + id_penjualan,
        { status },
        { withCredentials: true }
      )
      .then(() => {
        navigate(0);
      });
  };

  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-sm ${
          visible ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-black text-white flex flex-col gap-y-5 rounded ${
          visible ? "flex" : "hidden"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setVisibility((prev) => !prev)}
          className="size-6 absolute top-4 right-4 hover:fill-red-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span className="text-center font-bold text-2xl">Set Status Ke</span>
        <div className="flex gap-x-6">
          <button
            onClick={() => {
              handleSetOrder("pengemasan");
            }}
            className="px-4 py-1 bg-red-500"
          >
            Pengemasan
          </button>
          <button
            onClick={() => {
              handleSetOrder("dikirim");
            }}
            className="px-4 py-1 bg-orange-500"
          >
            Dikirim
          </button>
          <button
            onClick={() => {
              handleSetOrder("sampai");
            }}
            className="px-4 py-1 bg-emerald-500"
          >
            Sampai
          </button>
        </div>
      </div>
    </>
  );
}

function DetailComp({
  itemTerjual,
  visible,
  setVisibility,
}: {
  itemTerjual: any;
  visible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}) {
  const displayItemTerjual = itemTerjual?.map((i: any) => {
    return (
      <Fragment key={i.id_item}>
        <img src={i.photo_item} alt="baju" className="w-1/2" />
        <div className="flex flex-col gap-y-3">
          <span className="font-bold text-xl">
            {i.name} (x{i.quantity})
          </span>
          <span className="text-center font-bold">
            Rp {numberWithDot(i.price)}
          </span>
        </div>
      </Fragment>
    );
  });

  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-sm ${
          visible ? "block" : "hidden"
        }`}
      ></div>
      <div
        className={`fixed top-1/2 overflow-y-auto max-h-[80vh] left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-stone-400 flex flex-col gap-y-5 rounded border-2 border-black ${
          visible ? "block" : "hidden"
        }`}
      >
        <svg
          onClick={() => setVisibility((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 absolute top-4 right-4 hover:fill-red-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span className="font-bold text-4xl text-center">Detail</span>
        <div className="grid grid-cols-2 gap-y-5 justify-items-center items-center">
          {displayItemTerjual}
        </div>
      </div>
    </>
  );
}

type orderType = {
  id_penjualan: number;
};

type orderAction = {
  type: "set";
  payload: orderType;
};

function orderReducer(state: orderType, action: orderAction) {
  switch (action.type) {
    case "set":
      state.id_penjualan = action.payload.id_penjualan;
      return state;
    default:
      return state;
  }
}
