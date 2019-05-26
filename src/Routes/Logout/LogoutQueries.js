import React from "react";
import { gql } from "apollo-boost";
import { useMutation } from "react-apollo-hooks";
import withRouter from "react-router-dom/withRouter";
import LogoutPresenter from "./LogoutPresenter";


export const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;


export default withRouter (() => {
  const logOut = useMutation(LOG_OUT);
  
  return <LogoutPresenter logOut={logOut}  />;
});


