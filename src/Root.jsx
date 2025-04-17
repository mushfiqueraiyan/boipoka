import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
