import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Join from "../Routes/SignUp";
import login from "../Routes/Login/LoginPresenter"


const LoggedOutRoutes   = () => (
    <Router>
        <Switch>
             <Route exact path="/" component={Feed} />
             <Route exact path="/join" component={Join} />
             <Route exact path="/login" component={login} />
        </Switch>
    </Router>
    )

const LoggedInRoutes = () => (
        <Switch>
          
        </Switch>
      );    

const AppRouter = ({ isLoggedIn }) =>
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;

AppRouter.propTypes = {
    isLoggedin: PropTypes.bool.isRequired
}

export default AppRouter ;