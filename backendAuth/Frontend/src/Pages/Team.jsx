import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const linkStyle = {
  textDecoration: "none",

  color: "blue",
};
const buttonStyle = {
  marginBottom: "10px",
};
const Team = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleform = async (data) => {
    const user = localStorage.getItem("loggedInUser");
    console.log(data);
    const passJson = {
      name: data.name,
      description: data.description,
      users: data.users,
      teamOwner: user,
    };
    console.log(passJson);
    reset();

    const url = "http://localhost:8080/teams/createteam";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passJson),
    });

    const result = await response.json();
    console.log("result", result);
    const { success, message, error } = result;
    if (success) {
      toast.success("Team created successfully");
      reset();
    } else if (error) {
      const details = error?.details[0].message;
      toast.error(details);
    } else if (!success) {
      const details = error?.details[0].message;
      toast.error(details);
    }
  };

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    toast.success("Logging out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/teams/allusers");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const users = await response.json();
        console.log(users.data);
        setUsers(users.data); // Assuming data is an array of tasks
      } catch (err) {
        console.log(err);
        // Stop loading even if there’s an error
      }
    };
    console.log("allusers:", users);
    fetchUsers(); // Trigger the fetch request
  }, []);
  return (
    <>
      <div class="navbar">
        <nav className="flex-container">
          <li>
            <NavLink to="/Home" style={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/Task" style={linkStyle}>
              Task
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout} style={buttonStyle}>
              Logut
            </button>
          </li>
        </nav>
      </div>
      <div class="flex-contain">
        <div></div>
        <div>
          <div class="form-container">
            <div class="form-header">Team Submission Form</div>
            <form onSubmit={handleSubmit(handleform)}>
              <div class="form-group">
                <label for="title">Name</label>
                <input
                  type="text"
                  id="title"
                  name="name"
                  placeholder="Enter team name"
                  {...register("name")}
                />
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter task description"
                  {...register("description")}
                ></textarea>
              </div>

              <div class="form-group">
                <label for="status">Users</label>

                <select id="status" name="user" {...register("users")} multiple>
                  {users.map((user) => {
                    {
                      console.log(user.name);
                    }
                    return <option value={user.name}>{user.name}</option>;
                  })}
                </select>
              </div>

              <div class="form-group">
                <input type="submit" value="Submit Team" />
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Team;
