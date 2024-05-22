export default function LihatCustomer() {
  return (
    <div className="w-full p-5 grid grid-cols-3 gap-5 overflow-y-auto ">
      <span className="col-span-3 font-bold text-5xl text-center">
        Customers
      </span>

      <Customer
        src="/img/hacker-2.jpg"
        id={123}
        fullname="Wirawan Mahardika"
        username="wirawan"
        email="wirawanmahardika10@gmail.com"
      />
      <Customer
        src="/img/hat1.jpg"
        id={123}
        fullname="The Hat"
        username="hat"
        email="hat123@gmail.com"
      />
      <Customer
        src="/img/hacker-2.jpg"
        id={123}
        fullname="Wirawan Mahardika"
        username="wirawan"
        email="wirawanmahardika10@gmail.com"
      />
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
        <span className="font-bold text-4xl self-center text-center">
          {fullname}
        </span>
        <div className="w-full flex flex-col gap-y-2">
          <span className="text-sm">ID : {id}</span>
          <span className="text-sm">Fullname : {fullname}</span>
          <span className="text-sm">Username : {username}</span>
          <span className="text-sm">Email : {email}</span>
        </div>
      </div>
    </div>
  );
}
