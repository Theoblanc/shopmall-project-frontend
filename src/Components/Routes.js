import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import Join from "../Routes/Join";
import login from "../Routes/Login"


const LoggedOutRoutes   = () => (
    <Router>
        <Switch>
             <Route exact path="/" component={Feed} />
             <Route path="/join" component={Join} />
             <Route path="/login" component={login} />
        </Switch>
    </Router>
    )

const LoggedInRoutes = () => (
    <Router>
        <Switch>

        </Switch>
    </Router>
      );    

const AppRouter = ({ isLoggedIn }) =>
    isLoggedIn ? <LoggedOutRoutes /> : <LoggedInRoutes /> ;


AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };
  

export default AppRouter ;