import useFetchGet from "../../hooks/useFetchGet";

export default function LihatCustomer() {
  const users = useFetchGet("/api/users");
  console.log(users);

  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto ">
      <span className="col-span-3 font-bold text-5xl text-center">
        Customers
      </span>

      {users?.length &&
        users.map((u) => {
          return (
            <Customer
              src={u.photo}
              id={u.id}
              fullname={u.fullname}
              username={u.username}
              email={u.email}
            />
          );
        })}
    </div>
  );
}

function Customer({
  src,
  id,
  fullname,
  username,
  email,
}: {
  src?: string;
  id: number;
  fullname: string;
  username: string;
  email: string;
}) {
  return (
    <div className="hover:bg-slate-600 p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg h-full justify-end">
      {src ? (
        <img className="max-w-full rounded-full" src={src} alt={fullname} />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-2/3"
        >
          <path
            fillRule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <div className="flex flex-col items-start w-full gap-y-3">
        <span className="font-bold text-4xl self-center text-center capitalize">
          {fullname}
        </span>
        <div className="w-full flex flex-col gap-y-2">
          <span className="text-sm capitalize">Fullname : {fullname}</span>
          <span className="text-sm">Username : {username}</span>
          <span className="text-sm">Email : {email}</span>
          <span className="text-sm">ID : {id}</span>
        </div>
      </div>
    </div>
  );
}
