import { useState } from "react";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Home from "./Components/Home";
import AddTask from "./Components/AddTask";
import AddTeam from "./Components/AddTeam";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/LoginPage" element={<LoginForm />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Task" element={<AddTask />}></Route>
          <Route path="/Team" element={<AddTeam />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
