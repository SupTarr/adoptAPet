import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default Root;
