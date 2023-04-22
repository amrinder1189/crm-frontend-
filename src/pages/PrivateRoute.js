import React from "react";
import { Route, redirect } from "react-router-dom";
import { DefaultLayout } from "./DefaultLayout";

const isAuth = true;
export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : redirect("/")
      }
    />
  );
};
