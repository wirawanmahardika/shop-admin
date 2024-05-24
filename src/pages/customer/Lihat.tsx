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
              src="/img/hacker-2.jpg"
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
  src: string;
  id: number;
  fullname: string;
  username: string;
  email: string;
}) {
  return (
    <div className="hover:bg-slate-600 p-5 flex flex-col gap-y-5 items-center border-2 border-black rounded-lg shadow-lg h-full justify-end">
      <img className="max-w-full" src={src} alt={fullname} />
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
