import { useState } from "react";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Home from "./Pages/Home";
import { ToastContainer } from "react-toastify";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import RefreshHandler from "./Pages/RefreshHandler";
import Task from "./Pages/Task";
import Team from "./Pages/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Task" element={<Task />}></Route>
          <Route path="/Team" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
