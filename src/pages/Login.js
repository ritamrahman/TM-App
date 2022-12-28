import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Components/Loading/Loading";
import toast from "react-hot-toast";
import axios from "axios";
import { api } from "../api/api";
const Login = () => {
  const [error, setError] = useState("");
  const { signIn, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // handleFormSubmit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        user?.uid && toast.success("Login successful");
        user?.uid && navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // google signIn
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  // google signIn
  const handleGoogleSignIn = () => {
    setLoading(true);
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        saveUserInfo(user.displayName, user.email);
        user?.uid && toast.success("Login successful");
        setLoading(false);
        user?.uid && navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  // saveUserInfo
  const saveUserInfo = async (name, email) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post(`${api}/user/${email}`, { name, email }, config);
  };

  return loading === true ? (
    <Loading />
  ) : (
    <>
      <div className="w-full flex bg-primary dark:bg-matBlack-900">
        <div className="w-full max-w-md m-auto bg-offWhite dark:bg-matBlack-900 rounded-lg shadow-2xl py-10 px-16">
          <h1 className="text-2xl font-medium text-midnight mt-4 mb-12 text-center dark:text-primary">
            Log in to your account
          </h1>

          {/* Error Msg start */}
          {error && (
            <div className="flex flex-row mb-3 pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-fadeMidNight dark:bg-fadeMidNight dark:border-violet-400">
              <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full dark:bg-violet-400 dark:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <div className="flex-1 p-2">
                <p className="text-sm dark:text-gray-100">{error}</p>
              </div>
              <button type="button" className="ml-6 p-2 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          )}
          {/* Error Msg end */}

          <form onSubmit={handleFormSubmit}>
            <div>
              <label
                className="text-matBlack-900 dark:text-primary"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label
                className="text-matBlack-900 dark:text-primary"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Your Password"
              />
            </div>
            <div className="flex justify-end text-xs dark:text-primary">
              <Link rel="noopener noreferrer" to="#">
                Forgot Password?
              </Link>
            </div>
            <div className="w-full flex justify-center mt-6">
              <button
                type="submit"
                className={`w-full py-2 px-4 text-sm text-white dark:text-primary bg-purple-200 dark:bg-yellowGreen rounded  focus:outline-none focus:border-green-dark`}
              >
                Login
              </button>
            </div>
            {/* Login with social accounts */}
            <div className="flex items-center pt-4 space-x-1 mt-5">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm text-midnight dark:text-primary">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            {/* google */}
            <div className="flex justify-center space-x-4">
              <button
                aria-label="Log in with Google"
                onClick={handleGoogleSignIn}
                className="p-3 rounded-sm text-midnight dark:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
              {/* Twitter */}
              <button
                aria-label="Log in with Twitter"
                className="p-3 rounded-sm text-midnight dark:text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 text-midnight dark:text-primary">
              Don't have an account?
              <Link
                rel="noopener noreferrer"
                to="/signup"
                className="underline dark:text-gray-100"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
