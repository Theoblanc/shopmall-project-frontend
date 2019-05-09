import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Join from "../Routes/SignUp";

const LoggedInRoutes = () => <><Route exact path="/" component={Feed} /></>
const LoggedOutRoutes = () => <><Route exact path="/" component={Auth} /></>
const Singup = () => <><Route exact path="/join" component={Join} /></>

const AppRouter  = ({isLoggedIn}) => 
    <Router>
        <Switch>
            {isLoggedIn ? <Singup/>:<LoggedOutRoutes/>}
        </Switch>
    </Router>

AppRouter.propTypes = {
    isLoggedin: PropTypes.bool.isRequired
}

export default AppRouter ;