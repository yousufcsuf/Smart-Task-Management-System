import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, NavLink } from "react-router-dom";
import Datatable from "./Datatable";
import TeamDatatable from "./TeamDatatable";
import Genreport from "./Genreport";
const linkStyle = {
  textDecoration: "none",

  color: "blue",
};
const buttonStyle = {
  marginBottom: "10px",
};

const Home = () => {
  const [loggedInUser, setloggedInUser] = useState("");
  const [tasks, setTasks] = useState([]);
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();
  const taskCol = {
    col1: "Title",
    col2: "Description",
    col3: "Status",
    col4: "Due Date",
    col5: "Task Owner",
  };
  const teamCol = {
    col1: "Name",
    col2: "Description",
    col3: "Users",
    col4: "Team Owner",
  };

  //FOR FETCHING TASKS
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:8080/tasks/alltasks");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setTasks(data); // Assuming data is an array of tasks
      } catch (err) {
        console.log(err);
        // Stop loading even if there’s an error
      }
    };
    console.log("alltasks:", tasks);
    fetchTasks(); // Trigger the fetch request
  }, []);

  //FOR FETCHING TEAMS
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch("http://localhost:8080/teams/allteams");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setTeams(data); // Assuming data is an array of tasks
      } catch (err) {
        console.log(err);
        // Stop loading even if there’s an error
      }
    };
    console.log("allteams:", teams);
    fetchTeams(); // Trigger the fetch request
  }, []);

  useEffect(() => {
    setloggedInUser(localStorage.getItem("loggedInUser"));
  });
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    toast.success("Logging out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <>
      <div>
        <div class="navbar">
          <nav className="flex-container">
            <li>
              <NavLink to="/Task" style={linkStyle}>
                Task
              </NavLink>
            </li>

            <li>
              <NavLink to="/Team" style={linkStyle}>
                Team
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout} style={buttonStyle}>
                Logut
              </button>
            </li>
          </nav>
        </div>
        <h1>Welcome {loggedInUser} !</h1>

        <Datatable cols={taskCol} data={tasks} heading="Task" />
        <TeamDatatable cols={teamCol} data={teams} heading="Team" />
        <Genreport taskData={tasks} />
        <ToastContainer />
      </div>
    </>
  );
};
export default Home;
