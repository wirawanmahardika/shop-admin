import {
  Form,
  NavLink,
  ActionFunctionArgs,
  useActionData,
} from "react-router-dom";
import { myAxios } from "../helper/axios";

export default function Login() {
  const loginData = useActionData() as {
    status: number;
    message: string;
    place: string;
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={"/logo.png"}
            alt="Toko Sedia"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
          {loginData && loginData?.status < 300 ? (
            <div className="flex items-center justify-center w-full py-3 bg-emerald-300 rounded-md shadow-md mt-4">
              <p className="text-center font-semibold text-sm text-green-800 5">
                {"Berhasil Login"}
              </p>
            </div>
          ) : (
            loginData &&
            loginData?.status === 403 && (
              <div className="flex items-center justify-center w-full py-3 bg-red-300 rounded-md shadow-md mt-4">
                <p className="text-center font-semibold text-sm text-red-800 5">
                  {loginData.message}
                </p>
              </div>
            )
          )}
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form className="space-y-6" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6"
                />
              </div>
              {loginData && loginData.place === "username" && (
                <p className="text-sm mt-2 text-red-600">{loginData.message}</p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-main-1 hover:text-main-1"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-main-1 sm:text-sm sm:leading-6"
                />
              </div>
              {loginData && loginData.place === "password" && (
                <p className="text-sm mt-2 text-red-600">{loginData.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-main-1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-main-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-1"
              >
                Sign in
              </button>
            </div>
          </Form>

          <p className="mt-10 text-center text-sm text-gray-500">
            <NavLink
              to="/"
              className="font-semibold leading-6 text-main-1 hover:text-main-1"
            >
              Back To Homepage
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());
  try {
    const res = await myAxios.post("/api/users/login", data, {
      withCredentials: true,
    });

    return {
      status: res.status,
      message: res.data.message,
    };
  } catch (error: any) {
    console.log(error.response);
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.description,
        place: error.response.data.place,
      };
    }
  }
};
