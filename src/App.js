import "./styles/styles.css";
import "./utils/utils";
import Nav from "./components/nav/Nav";
import { Outlet } from "react-router-dom";
import React from 'react';
export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      {/* Need to add a footer */}
    </div>
  );
}
