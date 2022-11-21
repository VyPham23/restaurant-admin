import React from "react";
import Admin from "./components/Admin/Admin";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
      <Route path="/" element={<Admin />} />
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
