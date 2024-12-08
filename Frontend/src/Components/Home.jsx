import React from "react";
import TableData from "./TableData";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="h-16 ">
        <div className="h-full p-3 bg-slate-500 flex">
          <div>
            <p className="text-xl text-center">Task Management System | Home</p>
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

      <div class="grid grid-cols-2 gap-2 ">
        <div className=" m-2 border border-cyan-400">
          <span>Tasks</span>
          <TableData />
        </div>

        <div className=" m-2 border border-cyan-400">
          <span>Teams</span>
          <TableData />
        </div>
      </div>
      <div class="h-32 w-96 grid grid-cols-1 text-center mx-auto border border-cyan-400 ">
        <p>Overall report of the tasks</p>
      </div>
    </>
  );
};

export default Home;
