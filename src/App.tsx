import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Admin, Form, Sidebar } from "./components";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
