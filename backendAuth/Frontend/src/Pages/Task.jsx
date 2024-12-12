import React from "react";
import "./task.css";
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
const Task = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleform = async (data) => {
    const user = localStorage.getItem("loggedInUser");
    const passJson = {
      title: data.title,
      status: data.status,
      description: data.description,
      dueDate: data.dueDate,
      teamOwner: user,
    };
    console.log(passJson);
    const url = "http://localhost:8080/tasks/createtask";
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
      toast.success("Task created successfully");
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
      <div class="flex-contain">
        <div></div>
        <div>
          <div class="form-container">
            <div class="form-header">Task Submission Form</div>
            <form onSubmit={handleSubmit(handleform)}>
              <div class="form-group">
                <label for="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter task title"
                  {...register("title")}
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
                <label for="status">Status</label>
                <select id="status" name="status" {...register("status")}>
                  <option value="">Select Priority</option>
                  <option value="high">High Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="low">Low Priority</option>
                </select>
              </div>
              <div class="form-group">
                <label for="due-date">Due Date</label>
                <input
                  type="date"
                  id="due-date"
                  name="dueDate"
                  {...register("dueDate")}
                />
              </div>
              <div class="form-group">
                <input type="submit" value="Submit Task" />
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

export default Task;
