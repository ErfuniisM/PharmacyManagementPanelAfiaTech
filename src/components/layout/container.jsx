import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";

const Container = ({ children }) => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-w-full h-full p-4 bg-slate-100">{children}</div>
      </div>
    </div>
  );
};

export default Container;
