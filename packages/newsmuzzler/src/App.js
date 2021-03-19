import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Terms from "./components/pages/Terms";
import UnauthenticatedRoute from "./hoc/UnauthenticatedRoute";
import AuthenticatedRoute from "./hoc/AuthenticatedRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        {/* <Route exact path="/login" component={Login} /> */}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/terms" component={Terms} />
        {/* <Route exact path="/dashboard" component={Dashboard} /> */}
        <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
        <UnauthenticatedRoute exact path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;

// UnauthorizedRoute => ({componentToRender)} = {
//   useEffect(() => {
//     const isAuthorized = Service.isAuthorized()

//     if(isAuthorized) {
//       return <Dashboard />
//     }

//     return <Route componentToRender ></Route>
//   }, [])
// }

// DashboardRoute => ({componentToRender)} = {
//   useEffect(() => {
//     const isAuthorized = Service.isAuthorized()

//     if(!isAuthorized) {
//       return <Login />
//     }

//     return <Route <DashboardRoutecomponentToRender ></Route>
//   }, [])
// }
