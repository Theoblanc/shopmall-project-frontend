import React from "react";
import { useMutation } from "react-apollo-hooks";
import { LOG_OUT} from "./LogoutQueries";
import LogoutPresenter from "./LogoutPresenter";



export default () => {
    const logOut = useMutation(LOG_OUT);

    return <LogoutPresenter logOut={logOut}  />;

}