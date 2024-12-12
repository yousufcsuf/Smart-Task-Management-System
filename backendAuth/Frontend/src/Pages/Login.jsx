import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
const Login = () => {
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
      email: data.email,
      password: data.password,
    };

    const url = "http://localhost:8080/auth/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passJson),
    });
    const result = await response.json();
    console.log(result);
    const { success, message, jwtToken, name, error } = result;
    if (success) {
      toast.success("Logged in successfully");
      localStorage.setItem("token", jwtToken);
      localStorage.setItem("loggedInUser", name);
      reset();
      setTimeout(() => {
        navigate("/Home");
      }, 2000);
    } else if (error) {
      const details = error?.details[0].message;
      toast.error(details);
    } else if (success === false) {
      const details = error?.details[0].message;
      toast.error(details);
    }
    reset();
  };
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleform)}>
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
          <button type="submit">Login</button>
          <span>
            donot have account ? <Link to="/Signup">Signup</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
export default Login;
