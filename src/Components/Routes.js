import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Feed from "../Routes/Feed";
import Join from "../Routes/Join";
import login from "../Routes/Login";

const LoggedOutRoutes   = () => (
        <Switch>
             <Route exact path="/" component={Feed} />
             <Route path="/join" component={Join} />
             <Route path="/login" component={login} />
             <Redirect from="*" to="/" />

        </Switch>
    )

const LoggedInRoutes = () => (
        <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/join" component={Join} />
            <Redirect from="*" to="/" />

        </Switch>
      );    

const AppRouter = ({ isLoggedIn }) => 
    isLoggedIn ?  <LoggedInRoutes />  : <LoggedOutRoutes />;


AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };
  

export default AppRouter ;