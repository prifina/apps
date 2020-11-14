import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isUserLoggedIn as isUserLoggedInImport } from "../services/user";

// interface Props extends RouteProps {}

const AuthenticatedRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isUserLoggedInImport() ? (
        <Redirect to="/login" />
      ) : (
        React.createElement(component, props)
      )
    }
  />
);

export default AuthenticatedRoute;
