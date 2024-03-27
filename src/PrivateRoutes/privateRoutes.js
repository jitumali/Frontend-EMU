import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("access_token");
  return (
    <Route
      exact
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoutes;
