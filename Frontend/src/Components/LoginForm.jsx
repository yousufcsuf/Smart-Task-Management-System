import React from "react";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <>
      <div className="h-16 ">
        <div className="h-full p-3 bg-slate-500">
          <p className="text-2xl text-center">Task Management System</p>
        </div>
      </div>
      <div className="h-48">
        <div className="h-full p-6 white"></div>
      </div>
      <div className="h-48">
        <div className="h-full p-6 white"></div>
      </div>

      <div className="w-full max-w-xs text-center mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="password"
            />
          </div>

          <div className="mb-4 text-center">
            <Link
              to="/"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </Link>
          </div>
          <div className="mb-4 text-center">
            <Link
              to="/Register"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
