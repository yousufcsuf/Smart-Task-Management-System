import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AddTeam = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="h-16 ">
        <div className="h-full p-3 bg-slate-500 flex">
          <div>
            <p className="text-xl text-center">Task Management System | Team</p>
          </div>
          <div>
            <nav>
              <NavLink
                to="/Task"
                className={
                  "bg-blue-500 hover:bg-blue-700 text-white font-bold mx-2"
                }
              >
                Task
              </NavLink>
              <NavLink
                to="/Team"
                className={
                  "bg-blue-500 hover:bg-blue-700 text-white font-bold "
                }
              >
                Team
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
      <form
        className="w-full max-w-lg text-center mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Team Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="title"
              {...register("teamName")}
              placeholder="team Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              description
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="description"
              {...register("description")}
              placeholder="description"
            />
          </div>

          <div className="w-full px-3">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Team
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddTeam;
