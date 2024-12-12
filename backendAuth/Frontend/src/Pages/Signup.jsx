import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleform = async (data) => {
    console.log(data);
    const passJson = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    const url = "http://localhost:8080/auth/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passJson),
    });

    const result = await response.json();
    console.log(result);
    const { success, message, error } = result;
    if (success) {
      toast.success("Signed up successfully");
      reset();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else if (error) {
      const details = error?.details[0].message;
      toast.error(details);
    } else if (!success) {
      const details = error?.details[0].message;
      toast.error(details);
    }
  };
  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit(handleform)}>
        <div>
          <label>Name</label>
          <input
            type="input"
            name="name"
            autoFocus
            placeholder="Enter your Name"
            {...register("name")}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="input"
            name="email"
            autoFocus
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="input"
            name="password"
            autoFocus
            placeholder="Enter your password"
            {...register("password")}
          />
        </div>
        <button type="submit">SignUp</button>
        <span>
          Already have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
