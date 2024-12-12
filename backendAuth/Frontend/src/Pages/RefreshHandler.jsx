import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RefreshHandler({ setisAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setisAuthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/Login" ||
        location.pathname === "/Signup" ||
        location.pathname === "/Home"
      ) {
        navigate("/home", { replace: false });
      }
    }
  }, []);
  return null;
}
