import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isUserLoggedIn as isUserLoggedInImport } from "../services/user";

const UnauthenticatedRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isUserLoggedInImport() ? (
          <Redirect to="/dashboard" />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
};

export default UnauthenticatedRoute;
