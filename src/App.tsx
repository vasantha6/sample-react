import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Task from "./components/Task";
import Details from "./components/Details";
import Students from "./components/Students";
import NotFound from "./components/NotFound";
import "./styles/center.css";

export default function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 12 }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/task">Task</Link> | <Link to="/details">Details</Link>
        <Link to="/students">Students</Link>
      </nav>

      <div className="app-center-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/task" element={<Task />} />
          <Route path="/details" element={<Details />} />
          <Route path="/students" element={<Students />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
