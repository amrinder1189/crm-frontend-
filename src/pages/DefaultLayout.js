import React from "react";
import { Header } from "../pages/Header";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      <div className="Main">{children}</div>
    </div>
  );
};
